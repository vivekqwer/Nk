const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  razorpayOrderId: {
    type: String,
    required: true
  },
  razorpayPaymentId: String,
  razorpaySignature: String,
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'INR'
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  plan: {
    type: String,
    enum: ['Starter', 'Pro', 'Master'],
    required: true
  },
  billingCycle: {
    type: String,
    enum: ['monthly', 'yearly']
  },
  billingAddress: {
    fullName: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    pincode: String,
    country: String,
    gstin: String
  },
  couponCode: String,
  discountAmount: {
    type: Number,
    default: 0
  },
  gstAmount: {
    type: Number,
    default: 0
  },
  totalAmount: {
    type: Number,
    required: true
  },
  failureReason: String,
  refundedAt: Date,
  refundAmount: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);
