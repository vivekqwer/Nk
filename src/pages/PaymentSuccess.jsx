import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/payment.css';

function PaymentSuccess() {
  return (
    <div className="payment-page">
      <div className="payment-content success">
        <div className="success-icon">✓</div>
        <h1>You're in.</h1>
        <p>Your Pro subscription is active. Welcome to Harmony, Alex.</p>

        <div className="order-summary">
          <div className="summary-item">
            <span>Transaction ID</span>
            <span>pay_1234567890 <button className="copy-btn">📋</button></span>
          </div>
          <div className="summary-item">
            <span>Plan name</span>
            <span>Pro Plan — Monthly</span>
          </div>
          <div className="summary-item">
            <span>Amount paid</span>
            <span>₹531</span>
          </div>
          <div className="summary-item">
            <span>Next billing date</span>
            <span>May 20, 2026</span>
          </div>
          <button className="ghost-button">Download invoice</button>
        </div>

        <div className="cta-row">
          <Link to="/dashboard" className="primary-button">Go to Dashboard →</Link>
          <Link to="/courses" className="secondary-button">Browse courses</Link>
        </div>

        <div className="next-steps">
          <h3>Start here</h3>
          <div className="recommended-courses">
            <div className="course-card">
              <div className="course-thumb">🎸</div>
              <div className="course-info">
                <h4>Guitar Fundamentals</h4>
                <p>Beginner • 18 lessons</p>
              </div>
            </div>
            <div className="course-card">
              <div className="course-thumb">🎹</div>
              <div className="course-info">
                <h4>Piano Basics</h4>
                <p>Beginner • 15 lessons</p>
              </div>
            </div>
            <div className="course-card">
              <div className="course-thumb">🥁</div>
              <div className="course-info">
                <h4>Drum Patterns</h4>
                <p>Intermediate • 20 lessons</p>
              </div>
            </div>
          </div>
        </div>

        <div className="share-row">
          <p>Share your Pro status</p>
          <div className="social-share">
            <button className="share-btn">📘</button>
            <button className="share-btn">🐦</button>
            <button className="share-btn">📸</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
