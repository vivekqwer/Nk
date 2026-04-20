const express = require('express');
const Razorpay = require('razorpay');
const Payment = require('../models/Payment');
const User = require('../models/User');
const { auth } = require('../middleware/auth');

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create order
router.post('/create-order', auth, async (req, res) => {
  try {
    const { plan, billingCycle } = req.body;

    const prices = {
      'Pro': { monthly: 499, yearly: 4990 },
      'Master': { monthly: 999, yearly: 9990 }
    };

    const amount = prices[plan][billingCycle] * 100; // Convert to paise

    const options = {
      amount: amount,
      currency: 'INR',
      receipt: `harmony_${Date.now()}`,
      notes: {
        userId: req.user._id.toString(),
        plan,
        billingCycle
      }
    };

    const order = await razorpay.orders.create(options);

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create payment order' });
  }
});

// Verify payment
router.post('/verify', auth, async (req, res) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature, plan, billingCycle, billingAddress } = req.body;

    const crypto = require('crypto');
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpayOrderId}|${razorpayPaymentId}`)
      .digest('hex');

    if (generatedSignature !== razorpaySignature) {
      return res.status(400).json({ error: 'Invalid payment signature' });
    }

    // Save payment
    const payment = new Payment({
      user: req.user._id,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      amount: req.body.amount,
      plan,
      billingCycle,
      billingAddress,
      status: 'completed',
      totalAmount: req.body.amount
    });

    await payment.save();

    // Update user subscription
    const user = await User.findById(req.user._id);
    user.subscription.plan = plan;
    user.subscription.status = 'active';
    user.subscription.startDate = new Date();
    
    const endDate = new Date();
    if (billingCycle === 'yearly') {
      endDate.setFullYear(endDate.getFullYear() + 1);
    } else {
      endDate.setMonth(endDate.getMonth() + 1);
    }
    user.subscription.endDate = endDate;

    await user.save();

    res.json({ 
      message: 'Payment verified successfully',
      subscription: user.subscription
    });
  } catch (error) {
    res.status(500).json({ error: 'Payment verification failed' });
  }
});

// Get payment history
router.get('/history', auth, async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.json({ payments });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
