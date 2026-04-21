import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/admin-subscription-management.css';

function AdminSubscriptionManagement() {
  return (
    <div className="admin-subscription-page">
      {/* SideNavBar */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <h1>Admin Studio</h1>
          <p>Managing the Pulse</p>
        </div>
        <div className="sidebar-nav">
          <a href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a href="#">
            <span className="material-symbols-outlined">gavel</span>
            Disputes
          </a>
          <a href="#">
            <span className="material-symbols-outlined">payments</span>
            Refunds
          </a>
          <a href="#" className="active">
            <span className="material-symbols-outlined">card_membership</span>
            Subscriptions
          </a>
          <a href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </div>
        <div className="sidebar-footer">
          <button className="support-btn">Support Portal</button>
        </div>
      </nav>

      {/* TopAppBar */}
      <header className="top-bar">
        <div className="top-bar-left">
          <span className="brand">Harmony LMS</span>
          <nav className="top-nav">
            <a href="#" className="active">Plans</a>
            <a href="#">Subscribers</a>
            <a href="#">Analytics</a>
          </nav>
        </div>
        <div className="top-bar-right">
          <input type="text" placeholder="Search resources..." />
          <div className="icon-actions">
            <span className="material-symbols-outlined">notifications</span>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
        </div>
      </header>

      {/* Main Canvas */}
      <main className="main-content">
        {/* Header Section */}
        <div className="page-header">
          <h1>Subscription Management</h1>
          <p className="subtitle">Manage subscription plans and subscriber analytics.</p>
        </div>

        {/* Stats Overview */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <span className="material-symbols-outlined">people</span>
            </div>
            <div className="stat-info">
              <p className="stat-value">2,451</p>
              <p className="stat-label">Active Subscribers</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <span className="material-symbols-outlined">attach_money</span>
            </div>
            <div className="stat-info">
              <p className="stat-value">$48,290</p>
              <p className="stat-label">Monthly Revenue</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <div className="stat-info">
              <p className="stat-value">+12%</p>
              <p className="stat-label">Growth Rate</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <span className="material-symbols-outlined">card_membership</span>
            </div>
            <div className="stat-info">
              <p className="stat-value">3</p>
              <p className="stat-label">Active Plans</p>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <section className="plans-section">
          <div className="section-header">
            <h2>Subscription Plans</h2>
            <button className="btn-primary">
              <span className="material-symbols-outlined">add</span>
              Add Plan
            </button>
          </div>
          <div className="plans-grid">
            {[
              { name: 'Starter', price: '₹0', period: '7 days trial', features: ['Access to Starter courses', 'Community forum read-only', 'HD video quality'], subscribers: 845, active: true },
              { name: 'Pro', price: '₹499', period: '/month', features: ['All Starter features', 'Unlimited course access', 'Download offline', 'Priority support'], subscribers: 1245, active: true },
              { name: 'Enterprise', price: '₹999', period: '/month', features: ['All Pro features', 'Team management', 'API access', 'Custom branding'], subscribers: 361, active: true }
            ].map((plan, index) => (
              <div key={index} className={`plan-card ${plan.active ? 'active' : ''}`}>
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <span className="badge active">Active</span>
                </div>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="material-symbols-outlined">check</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="plan-footer">
                  <p className="mono">{plan.subscribers} subscribers</p>
                  <button className="btn-secondary">Edit Plan</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Subscribers */}
        <section className="subscribers-section">
          <div className="section-header">
            <h2>Recent Subscribers</h2>
            <button className="btn-secondary">View All</button>
          </div>
          <div className="subscribers-table">
            <table>
              <thead>
                <tr>
                  <th className="mono">Subscriber</th>
                  <th className="mono">Plan</th>
                  <th className="mono">Start Date</th>
                  <th className="mono">Status</th>
                  <th className="mono text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Alexander Sterling', plan: 'Pro', date: 'Oct 20, 2024', status: 'Active' },
                  { name: 'Julianne Moore', plan: 'Enterprise', date: 'Oct 18, 2024', status: 'Active' },
                  { name: 'Marcus Chen', plan: 'Starter', date: 'Oct 15, 2024', status: 'Trial' },
                  { name: 'Sarah Johnson', plan: 'Pro', date: 'Oct 12, 2024', status: 'Active' }
                ].map((sub, index) => (
                  <tr key={index}>
                    <td>
                      <div className="user-cell">
                        <div className="avatar"></div>
                        <span>{sub.name}</span>
                      </div>
                    </td>
                    <td className="mono">{sub.plan}</td>
                    <td className="mono">{sub.date}</td>
                    <td><span className={`badge ${sub.status.toLowerCase()}`}>{sub.status}</span></td>
                    <td className="text-right">
                      <button className="action-btn">
                        <span className="material-symbols-outlined">more_horiz</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminSubscriptionManagement;
