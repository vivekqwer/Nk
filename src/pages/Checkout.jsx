import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/checkout.css';

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  return (
    <div className="checkout-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">Harmony</Link>
          </div>
          <div className="nav-right">
            <Link to="/dashboard" className="ghost-button">Cancel</Link>
          </div>
        </div>
      </nav>

      <div className="checkout-container">
        {/* Left Column - Form */}
        <div className="checkout-form">
          <div className="breadcrumb">Pricing / Checkout</div>
          <h1>Complete your subscription</h1>

          {/* Account Block */}
          <div className="account-block">
            <div className="user-info">
              <div className="avatar">A</div>
              <div className="user-details">
                <div className="name">Alex Johnson</div>
                <div className="email">alex@example.com</div>
              </div>
            </div>
            <Link to="/login" className="change-link">Not you? Log out</Link>
          </div>

          {/* Billing Address */}
          <div className="form-section">
            <h2>Billing Address</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group full-width">
                <label>Address Line 1</label>
                <input type="text" placeholder="Street address" />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="City" />
              </div>
              <div className="form-group">
                <label>State</label>
                <input type="text" placeholder="State" />
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input type="text" placeholder="123456" />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" placeholder="India" />
              </div>
              <div className="form-group">
                <label>GSTIN (Optional)</label>
                <input type="text" placeholder="For business invoices" />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="form-section">
            <h2>Payment Method</h2>
            <div className="payment-methods">
              <div
                className={`payment-option ${paymentMethod === 'upi' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <div className="payment-icons">
                  <span>📱</span><span>🏦</span><span>💳</span>
                </div>
                <span>UPI</span>
              </div>
              <div
                className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="payment-icons">
                  <span>💳</span><span>💳</span><span>💳</span>
                </div>
                <span>Card</span>
              </div>
              <div
                className={`payment-option ${paymentMethod === 'netbanking' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('netbanking')}
              >
                <div className="payment-icons">
                  <span>🏦</span>
                </div>
                <span>Netbanking</span>
              </div>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="form-section">
            <div className="coupon-section">
              {!couponApplied ? (
                <>
                  <span>Have a coupon?</span>
                  <button className="expand-btn">+</button>
                </>
              ) : (
                <div className="coupon-applied">
                  <span className="coupon-badge">WELCOME10 applied • -₹49</span>
                  <button className="remove-btn">×</button>
                </div>
              )}
            </div>
          </div>

          {/* Terms */}
          <div className="form-section">
            <label className="checkbox">
              <input type="checkbox" required />
              <span>I agree to Harmony's Terms and the Razorpay Terms. I authorize auto-renewal per my plan.</span>
            </label>
          </div>

          {/* Submit */}
          <Link to="/payment-processing" className="submit-button">
            Pay ₹531 securely → 🔒
          </Link>
          <p className="helper-text">You'll be redirected to Razorpay's secure checkout.</p>
        </div>

        {/* Right Column - Order Summary */}
        <div className="order-summary">
          <div className="summary-card">
            <div className="summary-header">
              <h3>Pro Plan — Monthly</h3>
              <Link to="/subscription" className="change-link">Change</Link>
            </div>

            <ul className="plan-features">
              <li>✓ All 500+ courses</li>
              <li>✓ Live masterclasses</li>
              <li>✓ Downloadable lesson sheets</li>
              <li>✓ Progress certificates</li>
              <li>✓ Community full access</li>
            </ul>

            <div className="billing-cycle">
              Every month on the 20th. Cancel anytime.
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>Subtotal</span>
                <span>₹499</span>
              </div>
              <div className="price-row">
                <span>Coupon</span>
                <span>-₹49</span>
              </div>
              <div className="price-row">
                <span>GST (18%)</span>
                <span>₹81</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>₹531</span>
              </div>
            </div>

            <div className="trial-notice">
              <span className="notice-icon">ℹ️</span>
              <span>You won't be charged until May 20, 2026. Cancel before that for a 100% refund.</span>
            </div>

            <div className="guarantees">
              <div className="guarantee-item">
                <span>🔒</span>
                <span>Secured by 256-bit encryption</span>
              </div>
              <div className="guarantee-item">
                <span>💯</span>
                <span>7-day money-back guarantee</span>
              </div>
              <div className="guarantee-item">
                <span>🚫</span>
                <span>Cancel anytime, no questions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
