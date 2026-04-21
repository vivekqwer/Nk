import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/subscription.css';

function Subscription() {
  const [billingCycle, setBillingCycle] = useState('yearly');

  return (
    <div className="subscription-page">
      {/* TopAppBar */}
      <nav className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-left">
            <Link to="/" className="brand">Harmony LMS</Link>
            <div className="nav-links">
              <Link to="/courses">Courses</Link>
              <Link to="#">Masterclasses</Link>
              <Link to="/community">Community</Link>
              <Link to="/subscription" className="active">Pricing</Link>
            </div>
          </div>
          <div className="top-bar-right">
            <button className="icon-btn">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {/* Header */}
        <header className="page-header">
          <h1>Unlock the full library.</h1>
          <p>One subscription. 500+ courses. Zero lock-in.</p>
          <div className="billing-toggle">
            <button
              className={`toggle-btn ${billingCycle === 'monthly' ? '' : 'active'}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly (save 30%)
              <span className="best-value">Best value</span>
            </button>
            <button
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
          </div>
        </header>

        {/* Pricing Cards */}
        <section className="pricing-section">
          {/* Starter */}
          <div className="pricing-card starter">
            <div className="card-header">
              <h3>Starter</h3>
              <div className="price-display">
                <span className="price">₹0</span>
                <span className="period">/ 7 days trial</span>
              </div>
              <p>Perfect for beginners exploring the foundations.</p>
            </div>
            <ul className="features">
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span>Access to Starter courses</span>
              </li>
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span>Community forum read-only</span>
              </li>
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span>HD video quality</span>
              </li>
            </ul>
            <button className="btn-secondary">Start free trial</button>
          </div>

          {/* Pro */}
          <div className="pricing-card pro featured">
            <div className="popular-badge">Most Popular</div>
            <div className="card-header">
              <h3>Pro</h3>
              <div className="price-display">
                <span className="price">{billingCycle === 'monthly' ? '₹499' : '₹4,199'}</span>
                <span className="period">/ {billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              {billingCycle === 'yearly' && (
                <div className="savings">
                  <span className="mono strike">₹5,988</span>
                  <span className="save">Save ₹1,789</span>
                </div>
              )}
              <p>The complete studio experience for serious learners.</p>
            </div>
            <ul className="features">
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span className="feature-bold">All 500+ courses</span>
              </li>
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span className="feature-bold">Live masterclasses</span>
              </li>
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span className="feature-bold">Downloadable lesson sheets</span>
              </li>
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span className="feature-bold">Progress certificates</span>
              </li>
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span className="feature-bold">Community full access</span>
              </li>
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span className="feature-bold">Priority support</span>
              </li>
            </ul>
            <button className="btn-primary">
              Start Pro trial
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          {/* Master */}
          <div className="pricing-card master">
            <div className="card-header">
              <h3>Master</h3>
              <div className="price-display">
                <span className="price">{billingCycle === 'monthly' ? '₹999' : '₹9,990'}</span>
                <span className="period">/ {billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              <p>Billed annually</p>
            </div>
            <ul className="features">
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span className="feature-bold">Everything in Pro</span>
              </li>
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span>1-on-1 feedback sessions (2/month)</span>
              </li>
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span>Exclusive Grammy-artist workshops</span>
              </li>
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span>Early access to new releases</span>
              </li>
              <li>
                <span className="material-symbols-outlined filled">check_circle</span>
                <span>Dedicated mentor</span>
              </li>
            </ul>
            <Link to="/checkout" className="btn-gold">Go Master</Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Can I cancel anytime?</h3>
              <p>Yes, you can cancel your subscription at any time with no questions asked.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a money-back guarantee?</h3>
              <p>We offer a 7-day money-back guarantee for all paid plans.</p>
            </div>
            <div className="faq-item">
              <h3>Can I switch plans?</h3>
              <p>You can upgrade or downgrade your plan at any time from your account settings.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Subscription;
