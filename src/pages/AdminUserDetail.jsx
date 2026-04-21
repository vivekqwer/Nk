import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/admin-user-detail.css';

function AdminUserDetail() {
  return (
    <div className="admin-user-detail-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-section">
            <div className="logo-icon">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div>
              <h1>Studio Control</h1>
              <p>Admin Terminal</p>
            </div>
          </div>
        </div>
        <nav className="sidebar-nav">
          <a href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a href="#">
            <span className="material-symbols-outlined">school</span>
            Instructors
          </a>
          <a href="#" className="active">
            <span className="material-symbols-outlined filled">group</span>
            Students
          </a>
          <a href="#">
            <span className="material-symbols-outlined">payments</span>
            Revenue
          </a>
          <a href="#">
            <span className="material-symbols-outlined">library_music</span>
            Content
          </a>
        </nav>
        <div className="sidebar-footer">
          <button className="go-live-btn">
            <span className="material-symbols-outlined">podcasts</span>
            Go Live
          </button>
          <div className="footer-links">
            <a href="#">
              <span className="material-symbols-outlined">help</span>
              Support
            </a>
            <a href="#">
              <span className="material-symbols-outlined">terminal</span>
              Logs
            </a>
          </div>
        </div>
      </aside>

      {/* Top Bar */}
      <header className="top-bar">
        <div className="top-bar-left">
          <div className="breadcrumb">
            <span>Users</span>
            <span className="material-symbols-outlined">chevron_right</span>
            <span>Arjun Mehta</span>
          </div>
        </div>
        <div className="top-bar-right">
          <div className="search-bar">
            <input type="text" placeholder="Search parameters..." />
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className="icon-actions">
            <button className="icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="icon-btn">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="avatar"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* User Hero Section */}
        <section className="user-hero">
          <div className="user-profile-section">
            <div className="profile-image">
              <div className="image-wrapper">
                <div className="avatar-image"></div>
                <div className="verified-badge">
                  <span className="material-symbols-outlined filled">verified</span>
                </div>
              </div>
            </div>
            <div className="user-info">
              <h2>Arjun Mehta</h2>
              <div className="user-meta">
                <span className="mono email">arjun.m@design.in</span>
                <div className="badge premium">
                  <span className="material-symbols-outlined filled">workspace_premium</span>
                  Premium Master
                </div>
                <div className="badge active">
                  <span className="status-dot"></span>
                  Active
                </div>
              </div>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn-secondary">Edit Profile</button>
            <button className="btn-primary">Send Message</button>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div className="stat-info">
              <p className="stat-value">12</p>
              <p className="stat-label">Courses Enrolled</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <span className="material-symbols-outlined">workspace_premium</span>
            </div>
            <div className="stat-info">
              <p className="stat-value">8</p>
              <p className="stat-label">Certificates Earned</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div className="stat-info">
              <p className="stat-value">156</p>
              <p className="stat-label">Hours Watched</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <span className="material-symbols-outlined">star</span>
            </div>
            <div className="stat-info">
              <p className="stat-value">4.9</p>
              <p className="stat-label">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <section className="activity-section">
          <div className="section-header">
            <h3>Recent Activity</h3>
            <button className="btn-secondary">View All</button>
          </div>
          <div className="activity-list">
            {[
              { type: 'course', title: 'Completed: Analog Synthesis Masterclass', date: '2 hours ago', icon: 'check_circle' },
              { type: 'certificate', title: 'Earned Certificate: Music Theory Fundamentals', date: '1 day ago', icon: 'workspace_premium' },
              { type: 'enrollment', title: 'Enrolled in: Advanced Mixing Techniques', date: '3 days ago', icon: 'school' },
              { type: 'review', title: 'Left a review: Piano Mastery Course', date: '5 days ago', icon: 'star' }
            ].map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-icon">
                  <span className="material-symbols-outlined">{activity.icon}</span>
                </div>
                <div className="activity-content">
                  <p>{activity.title}</p>
                  <span className="mono date">{activity.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enrolled Courses */}
        <section className="courses-section">
          <div className="section-header">
            <h3>Enrolled Courses</h3>
            <button className="btn-secondary">View All</button>
          </div>
          <div className="courses-grid">
            {[
              { title: 'Analog Synthesis Masterclass', progress: 100, instructor: 'Dr. Sarah Chen' },
              { title: 'Music Theory Fundamentals', progress: 100, instructor: 'Prof. Michael Torres' },
              { title: 'Advanced Mixing Techniques', progress: 45, instructor: 'Alex Rivera' },
              { title: 'Piano Mastery Course', progress: 78, instructor: 'Emma Thompson' }
            ].map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-image"></div>
                <div className="course-info">
                  <h4>{course.title}</h4>
                  <p className="instructor">{course.instructor}</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <span className="mono progress-text">{course.progress}% Complete</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminUserDetail;
