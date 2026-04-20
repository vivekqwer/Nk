import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/payment.css';

function PaymentFailed() {
  return (
    <div className="payment-page">
      <div className="payment-content">
        <div className="warning-icon">⚠️</div>
        <h2>Payment Failed</h2>
        <p>We couldn't process your payment. Please try again or contact support.</p>

        <div className="process-steps">
          <div className="step completed">Order created</div>
          <div className="step completed">Redirected to payment</div>
          <div className="step">Payment verification failed</div>
        </div>

        <div className="order-summary">
          <div className="summary-header">
            <h3>Order Summary</h3>
          </div>
          <div className="summary-item">
            <span>Pro Plan (Monthly)</span>
            <span>₹499</span>
          </div>
          <div className="summary-item">
            <span>GST (18%)</span>
            <span>₹90</span>
          </div>
          <div className="summary-item total">
            <span>Total</span>
            <span>₹589</span>
          </div>
        </div>

        <div className="cta-row">
          <Link to="/checkout" className="primary-button">Try Again</Link>
          <Link to="/subscription" className="ghost-button">Change Plan</Link>
        </div>

        <div className="next-steps">
          <h3>Need Help?</h3>
          <p>If the problem persists, please contact our support team with your order details.</p>
          <Link to="/support" className="ghost-button">Contact Support →</Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentFailed;
