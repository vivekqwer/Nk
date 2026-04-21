import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/order-history.css';

function OrderHistory() {
  return (
    <div className="order-history-page">
      {/* TopNavBar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="brand">
            <span className="logo">Analog Master</span>
          </div>
          <div className="nav-links">
            <a href="#">My Library</a>
            <a href="#" className="active">Order History</a>
            <a href="#">Studio Feed</a>
            <a href="#">Settings</a>
          </div>
          <div className="nav-actions">
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">account_circle</span>
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </div>
      </nav>

      <div className="page-layout">
        {/* SideNavBar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>The Studio</h2>
            <p className="mono">Analog Master LMS</p>
          </div>
          <nav className="sidebar-nav">
            <a href="#">
              <span className="material-symbols-outlined">library_music</span>
              My Library
            </a>
            <a href="#" className="active">
              <span className="material-symbols-outlined">history_edu</span>
              Order History
            </a>
            <a href="#">
              <span className="material-symbols-outlined">graphic_eq</span>
              Studio Feed
            </a>
            <a href="#">
              <span className="material-symbols-outlined">settings</span>
              Settings
            </a>
          </nav>
          <div className="sidebar-footer">
            <button className="pro-btn">Go Pro</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <header className="page-header">
            <h1>Billing history</h1>
            <p className="subtitle">Every transaction in one place.</p>
          </header>

          {/* Current Plan Summary */}
          <section className="plan-summary">
            <div className="plan-card">
              <div className="plan-info">
                <div className="plan-badge">
                  <span className="material-symbols-outlined filled">check_circle</span>
                  Active
                </div>
                <h3>Pro Plan</h3>
                <p className="text-muted">Monthly billing cycle</p>
              </div>
              <div className="plan-details">
                <p className="mono">Next Payment</p>
                <p className="date">20 May 2026</p>
                <button className="manage-btn">Manage Subscription</button>
              </div>
            </div>
            <div className="balance-card">
              <p className="mono">Current Balance</p>
              <h4>$0.00</h4>
              <p className="text-muted italic">No outstanding dues</p>
            </div>
          </section>

          {/* Billing Table */}
          <section className="billing-table">
            <table>
              <thead>
                <tr>
                  <th className="mono">Date</th>
                  <th className="mono">Transaction ID</th>
                  <th className="mono">Description</th>
                  <th className="mono">Amount</th>
                  <th className="mono">Status</th>
                  <th className="mono text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="status-paid">
                  <td className="mono">20 Apr 2024</td>
                  <td className="mono text-muted">#AM-98234-LL</td>
                  <td className="italic">Monthly Pro Membership</td>
                  <td className="mono font-bold">$29.00</td>
                  <td><span className="badge paid">Paid</span></td>
                  <td className="text-right">
                    <div className="action-group">
                      <button>
                        <span className="material-symbols-outlined">visibility</span>
                        <span className="mono">View</span>
                      </button>
                      <button>
                        <span className="material-symbols-outlined">download</span>
                        <span className="mono">PDF</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="status-paid">
                  <td className="mono">20 Mar 2024</td>
                  <td className="mono text-muted">#AM-87121-LX</td>
                  <td className="italic">Monthly Pro Membership</td>
                  <td className="mono font-bold">$29.00</td>
                  <td><span className="badge paid">Paid</span></td>
                  <td className="text-right">
                    <div className="action-group">
                      <button>
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                      <button>
                        <span className="material-symbols-outlined">download</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="status-failed">
                  <td className="mono">20 Feb 2024</td>
                  <td className="mono text-muted">#AM-76010-FF</td>
                  <td className="italic">Monthly Pro Membership</td>
                  <td className="mono font-bold">$29.00</td>
                  <td><span className="badge failed">Failed</span></td>
                  <td className="text-right">
                    <button className="retry-btn">Retry Payment</button>
                  </td>
                </tr>
                <tr className="status-refunded">
                  <td className="mono">15 Jan 2024</td>
                  <td className="mono text-muted">#AM-65009-RR</td>
                  <td className="italic">One-time Masterclass Access</td>
                  <td className="mono font-bold">$149.00</td>
                  <td><span className="badge refunded">Refunded</span></td>
                  <td className="text-right">
                    <div className="action-group">
                      <button>
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                      <button>
                        <span className="material-symbols-outlined">download</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="status-paid">
                  <td className="mono">20 Dec 2023</td>
                  <td className="mono text-muted">#AM-54001-AZ</td>
                  <td className="italic">Monthly Pro Membership</td>
                  <td className="mono font-bold">$29.00</td>
                  <td><span className="badge paid">Paid</span></td>
                  <td className="text-right">
                    <div className="action-group">
                      <button>
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                      <button>
                        <span className="material-symbols-outlined">download</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="table-footer">
              <button className="mono">Load More Records</button>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">Analog Master</div>
            <p className="mono">© 2024 Analog Master Records. All Rights Reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#" className="mono">Support</a>
            <a href="#" className="mono">Privacy Policy</a>
            <a href="#" className="mono">Terms of Service</a>
            <a href="#" className="mono">Studio Status</a>
          </div>
          <div className="footer-social">
            <span className="social-icon">
              <span className="material-symbols-outlined">share</span>
            </span>
            <span className="social-icon">
              <span className="material-symbols-outlined">mail</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OrderHistory;
