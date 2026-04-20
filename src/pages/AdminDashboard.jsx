import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/admin-dashboard.css';

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCourses: 0,
    totalRevenue: 0,
    activeSubscriptions: 0
  });
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // TODO: Fetch admin stats from API
    setStats({
      totalUsers: 5234,
      totalCourses: 48,
      totalRevenue: 1245000,
      activeSubscriptions: 3120
    });
  }, []);

  return (
    <div className="admin-dashboard">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <div className="logo">Harmony</div>
          <span className="admin-badge">Admin</span>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={activeTab === 'overview' ? 'active' : ''} 
            onClick={() => setActiveTab('overview')}
          >
            <span className="icon">📊</span>
            <span>Overview</span>
          </button>
          <button 
            className={activeTab === 'users' ? 'active' : ''} 
            onClick={() => setActiveTab('users')}
          >
            <span className="icon">👥</span>
            <span>Users</span>
          </button>
          <button 
            className={activeTab === 'courses' ? 'active' : ''} 
            onClick={() => setActiveTab('courses')}
          >
            <span className="icon">📚</span>
            <span>Courses</span>
          </button>
          <button 
            className={activeTab === 'instructors' ? 'active' : ''} 
            onClick={() => setActiveTab('instructors')}
          >
            <span className="icon">🎵</span>
            <span>Instructors</span>
          </button>
          <button 
            className={activeTab === 'payments' ? 'active' : ''} 
            onClick={() => setActiveTab('payments')}
          >
            <span className="icon">💳</span>
            <span>Payments</span>
          </button>
          <button 
            className={activeTab === 'analytics' ? 'active' : ''} 
            onClick={() => setActiveTab('analytics')}
          >
            <span className="icon">📈</span>
            <span>Analytics</span>
          </button>
          <button 
            className={activeTab === 'settings' ? 'active' : ''} 
            onClick={() => setActiveTab('settings')}
          >
            <span className="icon">⚙️</span>
            <span>Settings</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="logout-btn">
            <span className="icon">🚪</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
          <div className="header-actions">
            <button className="icon-btn">🔔</button>
            <div className="admin-profile">A</div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="admin-content">
            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon users">👥</div>
                <div className="stat-info">
                  <div className="stat-value">{stats.totalUsers.toLocaleString()}</div>
                  <div className="stat-label">Total Users</div>
                  <div className="stat-trend positive">↑ +12% this month</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon courses">📚</div>
                <div className="stat-info">
                  <div className="stat-value">{stats.totalCourses}</div>
                  <div className="stat-label">Total Courses</div>
                  <div className="stat-trend positive">↑ +3 new</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon revenue">💰</div>
                <div className="stat-info">
                  <div className="stat-value">₹{(stats.totalRevenue / 100000).toFixed(2)}L</div>
                  <div className="stat-label">Total Revenue</div>
                  <div className="stat-trend positive">↑ +8% this month</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon subscriptions">📋</div>
                <div className="stat-info">
                  <div className="stat-value">{stats.activeSubscriptions.toLocaleString()}</div>
                  <div className="stat-label">Active Subscriptions</div>
                  <div className="stat-trend positive">↑ +5% this month</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="section">
              <h2>Recent Activity</h2>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">👤</div>
                  <div className="activity-info">
                    <div className="activity-text">New user registered</div>
                    <div className="activity-time">2 minutes ago</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">💳</div>
                  <div className="activity-info">
                    <div className="activity-text">Payment received - ₹499</div>
                    <div className="activity-time">15 minutes ago</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">📚</div>
                  <div className="activity-info">
                    <div className="activity-text">New course published</div>
                    <div className="activity-time">1 hour ago</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">👥</div>
                  <div className="activity-info">
                    <div className="activity-text">User upgraded to Pro plan</div>
                    <div className="activity-time">2 hours ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="section">
              <h2>Quick Actions</h2>
              <div className="quick-actions">
                <button className="action-btn">
                  <span className="icon">➕</span>
                  <span>Add New Course</span>
                </button>
                <button className="action-btn">
                  <span className="icon">👤</span>
                  <span>Manage Users</span>
                </button>
                <button className="action-btn">
                  <span className="icon">📧</span>
                  <span>Send Newsletter</span>
                </button>
                <button className="action-btn">
                  <span className="icon">📊</span>
                  <span>View Analytics</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="admin-content">
            <div className="section-header">
              <h2>User Management</h2>
              <button className="primary-button">Add User</button>
            </div>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Subscription</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i}>
                      <td>
                        <div className="user-cell">
                          <div className="avatar">A</div>
                          <span>User {i}</span>
                        </div>
                      </td>
                      <td>user{i}@example.com</td>
                      <td><span className="badge student">Student</span></td>
                      <td><span className="badge pro">Pro</span></td>
                      <td><span className="status active">Active</span></td>
                      <td>
                        <button className="icon-btn">✏️</button>
                        <button className="icon-btn">🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="admin-content">
            <div className="section-header">
              <h2>Course Management</h2>
              <button className="primary-button">Add Course</button>
            </div>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Instructor</th>
                    <th>Students</th>
                    <th>Rating</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i}>
                      <td>
                        <div className="course-cell">
                          <div className="course-icon">🎸</div>
                          <span>Course {i}</span>
                        </div>
                      </td>
                      <td>Instructor {i}</td>
                      <td>{(i * 500 + 100).toLocaleString()}</td>
                      <td>⭐ 4.{i}</td>
                      <td><span className="status active">Published</span></td>
                      <td>
                        <button className="icon-btn">✏️</button>
                        <button className="icon-btn">🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="admin-content">
            <div className="section-header">
              <h2>Payment Transactions</h2>
              <button className="secondary-button">Export</button>
            </div>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Plan</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i}>
                      <td>TXN{i}001</td>
                      <td>User {i}</td>
                      <td>₹499</td>
                      <td>Pro Monthly</td>
                      <td>2026-04-{10 + i}</td>
                      <td><span className="status success">Success</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;
