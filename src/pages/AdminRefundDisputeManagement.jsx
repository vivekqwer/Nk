import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/admin-refund-dispute-management.css';

function AdminRefundDisputeManagement() {
  return (
    <div className="admin-refund-dispute-page">
      {/* SideNavBar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Admin Studio</h1>
          <p>Managing the Pulse</p>
        </div>
        <nav className="sidebar-nav">
          <a href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a href="#" className="active">
            <span className="material-symbols-outlined">gavel</span>
            Disputes
          </a>
          <a href="#">
            <span className="material-symbols-outlined">payments</span>
            Refunds
          </a>
          <a href="#">
            <span className="material-symbols-outlined">card_membership</span>
            Subscriptions
          </a>
          <a href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </nav>
        <div className="sidebar-footer">
          <div className="admin-profile">
            <div className="avatar"></div>
            <div>
              <p>Chief Editor</p>
              <p className="mono">ID: #AM-902</p>
            </div>
          </div>
          <button className="support-btn">Support Portal</button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="main-content">
        {/* TopAppBar */}
        <header className="top-bar">
          <div className="top-bar-left">
            <span className="brand">Harmony LMS</span>
            <nav className="top-nav">
              <a href="#" className="active">Management</a>
              <a href="#">Archive</a>
              <a href="#">Reports</a>
            </nav>
          </div>
          <div className="top-bar-right">
            <div className="search-bar">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="Search records..." />
            </div>
            <button className="icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="avatar"></div>
          </div>
        </header>

        <div className="content-area">
          {/* Page Header */}
          <div className="page-header">
            <h1>Refund & Dispute Management</h1>
            <p className="subtitle">Process refund requests and resolve payment disputes efficiently.</p>
          </div>

          {/* Stats Overview */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon pending">
                <span className="material-symbols-outlined">pending</span>
              </div>
              <div className="stat-info">
                <p className="stat-value">24</p>
                <p className="stat-label">Pending Requests</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon approved">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div className="stat-info">
                <p className="stat-value">156</p>
                <p className="stat-label">Approved This Month</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon rejected">
                <span className="material-symbols-outlined">cancel</span>
              </div>
              <div className="stat-info">
                <p className="stat-value">12</p>
                <p className="stat-label">Rejected This Month</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon amount">
                <span className="material-symbols-outlined">attach_money</span>
              </div>
              <div className="stat-info">
                <p className="stat-value">$4,521</p>
                <p className="stat-label">Total Refunded</p>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="filter-bar">
            <div className="filter-tabs">
              <button className="tab active">All Requests</button>
              <button className="tab">Pending</button>
              <button className="tab">Approved</button>
              <button className="tab">Rejected</button>
            </div>
            <div className="filter-actions">
              <button className="btn-secondary">
                <span className="material-symbols-outlined">filter_list</span>
                Filter
              </button>
              <button className="btn-secondary">
                <span className="material-symbols-outlined">download</span>
                Export
              </button>
            </div>
          </div>

          {/* Disputes Table */}
          <div className="disputes-table">
            <table>
              <thead>
                <tr>
                  <th className="mono">Request ID</th>
                  <th className="mono">User</th>
                  <th className="mono">Amount</th>
                  <th className="mono">Reason</th>
                  <th className="mono">Date</th>
                  <th className="mono">Status</th>
                  <th className="mono text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="status-pending">
                  <td className="mono">#REF-98234</td>
                  <td>
                    <div className="user-cell">
                      <div className="avatar-small"></div>
                      <span>Alexander Sterling</span>
                    </div>
                  </td>
                  <td className="mono font-bold">$149.00</td>
                  <td>Course not as described</td>
                  <td className="mono">Oct 20, 2024</td>
                  <td><span className="badge pending">Pending</span></td>
                  <td className="text-right">
                    <div className="action-buttons">
                      <button className="btn-approve">
                        <span className="material-symbols-outlined">check</span>
                      </button>
                      <button className="btn-reject">
                        <span className="material-symbols-outlined">close</span>
                      </button>
                      <button className="btn-view">
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="status-approved">
                  <td className="mono">#REF-87121</td>
                  <td>
                    <div className="user-cell">
                      <div className="avatar-small"></div>
                      <span>Julianne Moore</span>
                    </div>
                  </td>
                  <td className="mono font-bold">$29.00</td>
                  <td>Accidental purchase</td>
                  <td className="mono">Oct 18, 2024</td>
                  <td><span className="badge approved">Approved</span></td>
                  <td className="text-right">
                    <div className="action-buttons">
                      <button className="btn-view">
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="status-rejected">
                  <td className="mono">#REF-76010</td>
                  <td>
                    <div className="user-cell">
                      <div className="avatar-small"></div>
                      <span>Marcus Chen</span>
                    </div>
                  </td>
                  <td className="mono font-bold">$99.00</td>
                  <td>Course completed</td>
                  <td className="mono">Oct 15, 2024</td>
                  <td><span className="badge rejected">Rejected</span></td>
                  <td className="text-right">
                    <div className="action-buttons">
                      <button className="btn-view">
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminRefundDisputeManagement;
