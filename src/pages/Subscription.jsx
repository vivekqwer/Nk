import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/landing.css';
import '../styles/subscription.css';

function Subscription() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="subscription-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">Harmony</Link>
            <div className="nav-links">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/courses" className="active">Courses</Link>
              <a href="#live">Live Sessions</a>
              <Link to="/community">Community</Link>
            </div>
          </div>
          <div className="nav-right">
            <MobileNav />
            <div className="search-icon">🔍</div>
            <div className="notifications">🔔</div>
            <div className="avatar">A</div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pricing-header">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <h1>Unlock the full library.</h1>
          <p>One subscription. 500+ courses. Zero lock-in.</p>

          <div className="pricing-toggle">
            <button
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="best-value">Best value</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing">
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">₹0</div>
            <p>7 days trial</p>
            <ul>
              <li>✓ Access to Starter courses</li>
              <li>✓ Community forum read-only</li>
              <li>✓ HD video quality</li>
            </ul>
            <button className="secondary-button">Start free trial</button>
          </div>

          <div className="pricing-card featured">
            <div className="ribbon">MOST POPULAR</div>
            <h3>Pro</h3>
            <div className="price">
              {billingCycle === 'monthly' ? '₹499' : '₹4,199'}
              <span>/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
            </div>
            {billingCycle === 'yearly' && <p><del>₹5,988</del> Save 30%</p>}
            <ul>
              <li>✓ All 500+ courses</li>
              <li>✓ Live masterclasses</li>
              <li>✓ Downloadable lesson sheets</li>
              <li>✓ Progress certificates</li>
              <li>✓ Community full access</li>
              <li>✓ Priority support</li>
            </ul>
            <button className="primary-button">Start Pro trial →</button>
          </div>

          <div className="pricing-card premium">
            <h3>Master</h3>
            <div className="price">
              {billingCycle === 'monthly' ? '₹999' : '₹9,990'}
              <span>/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
            </div>
            <p>Billed annually</p>
            <ul>
              <li>✓ Everything in Pro</li>
              <li>✓ 1-on-1 feedback sessions (2/month)</li>
              <li>✓ Exclusive Grammy-artist workshops</li>
              <li>✓ Early access to new releases</li>
              <li>✓ Dedicated mentor</li>
            </ul>
            <Link to="/checkout" className="gold-button">Go Master</Link>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="trust-row">
        <div className="section-container">
          <div className="trust-items">
            <div className="trust-item">
              <span>🔒</span>
              <p>Secured by 256-bit encryption</p>
            </div>
            <div className="trust-item">
              <span>💯</span>
              <p>7-day money-back guarantee</p>
            </div>
            <div className="trust-item">
              <span>🚫</span>
              <p>Cancel anytime, no questions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subscription;
