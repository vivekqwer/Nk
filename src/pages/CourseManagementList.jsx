import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/course-management-list.css';

function CourseManagementList() {
  return (
    <div className="course-management-page">
      {/* SideNavBar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="brand-section">
            <span className="brand-name">The Master</span>
            <span className="brand-subtitle">Studio Control</span>
          </div>
          <nav className="sidebar-nav">
            <a href="#">
              <span className="material-symbols-outlined">dashboard</span>
              Studio Dashboard
            </a>
            <a href="#" className="active">
              <span className="material-symbols-outlined filled">subscriptions</span>
              Course Catalog
            </a>
            <a href="#">
              <span className="material-symbols-outlined">group</span>
              Student Roster
            </a>
            <a href="#">
              <span className="material-symbols-outlined">payments</span>
              Revenue Streams
            </a>
            <a href="#">
              <span className="material-symbols-outlined">settings</span>
              System Settings
            </a>
          </nav>
          <div className="sidebar-footer">
            <button className="add-track-btn">
              <span className="material-symbols-outlined">add</span>
              Add New Track
            </button>
            <div className="admin-profile">
              <div className="avatar"></div>
              <div>
                <span className="name">The Master</span>
                <span className="role">Admin Studio Profile</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* TopAppBar */}
        <header className="top-bar">
          <div className="top-bar-left">
            <span className="brand">Analog Master Admin</span>
            <div className="search-wrapper">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="SEARCH CATALOG..." />
            </div>
          </div>
          <div className="top-bar-right">
            <button className="icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="icon-btn">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        <div className="content-area">
          {/* Page Header */}
          <div className="page-header">
            <h1>Course Catalog</h1>
            <p className="subtitle">Manage all courses across the platform.</p>
            <div className="header-actions">
              <button className="btn-secondary">
                <span className="material-symbols-outlined">filter_list</span>
                Filter
              </button>
              <button className="btn-secondary">
                <span className="material-symbols-outlined">sort</span>
                Sort
              </button>
              <button className="btn-primary">
                <span className="material-symbols-outlined">add</span>
                Add Course
              </button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon total">
                <span className="material-symbols-outlined">library_music</span>
              </div>
              <div className="stat-info">
                <p className="stat-value">48</p>
                <p className="stat-label">Total Courses</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon published">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div className="stat-info">
                <p className="stat-value">36</p>
                <p className="stat-label">Published</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon draft">
                <span className="material-symbols-outlined">edit_note</span>
              </div>
              <div className="stat-info">
                <p className="stat-value">12</p>
                <p className="stat-label">Drafts</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon enrolled">
                <span className="material-symbols-outlined">people</span>
              </div>
              <div className="stat-info">
                <p className="stat-value">2.4K</p>
                <p className="stat-label">Total Enrolled</p>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="courses-grid">
            {[
              { title: 'Analog Synthesis Masterclass', category: 'Production', status: 'Published', students: 452, rating: 4.8 },
              { title: 'Advanced Mixing Techniques', category: 'Audio Engineering', status: 'Published', students: 328, rating: 4.9 },
              { title: 'Music Theory Fundamentals', category: 'Theory', status: 'Draft', students: 0, rating: 0 },
              { title: 'Guitar for Beginners', category: 'Guitar', status: 'Published', students: 891, rating: 4.7 },
              { title: 'Piano Mastery Course', category: 'Piano', status: 'Published', students: 623, rating: 4.8 },
              { title: 'Electronic Music Production', category: 'Production', status: 'Draft', students: 0, rating: 0 }
            ].map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-image">
                  <span className="category-badge mono">{course.category}</span>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <div className="course-meta">
                    <span className="mono">{course.students} students</span>
                    <span className="mono rating">
                      <span className="material-symbols-outlined">star</span>
                      {course.rating}
                    </span>
                  </div>
                  <div className="course-status">
                    <span className={`badge ${course.status.toLowerCase()}`}>
                      {course.status}
                    </span>
                  </div>
                  <div className="course-actions">
                    <button className="action-btn edit">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="action-btn view">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                    <button className="action-btn more">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CourseManagementList;
