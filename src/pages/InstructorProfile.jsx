import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/instructor.css';

function InstructorProfile() {
  return (
    <div className="instructor-profile">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">Harmony</Link>
            <div className="nav-links">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/courses">Courses</Link>
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
      <div className="profile-header">
        <div className="header-content">
          <div className="instructor-avatar-large">JS</div>
          <div className="instructor-info">
            <div className="name-row">
              <h1>John Smith</h1>
              <span className="verified-badge">✓ Verified Instructor</span>
            </div>
            <p className="bio">Grammy-winning guitarist with 20+ years of experience. Specializing in rock, jazz, and blues techniques.</p>
            <div className="stats-row">
              <div className="stat">
                <span className="value">3</span>
                <span className="label">Courses</span>
              </div>
              <div className="stat">
                <span className="value">50K+</span>
                <span className="label">Students</span>
              </div>
              <div className="stat">
                <span className="value">4.9</span>
                <span className="label">Rating</span>
              </div>
            </div>
          </div>
          <div className="header-actions">
            <button className="primary-button">Follow</button>
            <button className="secondary-button">Message</button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="profile-content">
        <div className="main-section">
          {/* About */}
          <section className="about-section">
            <h2>About</h2>
            <p>John Smith is a renowned guitarist who has performed with some of the biggest names in the music industry. With multiple Grammy nominations and a platinum album under his belt, he brings decades of real-world experience to his teaching.</p>
            <p>His teaching philosophy focuses on practical techniques that students can immediately apply to their playing, whether they're beginners or advanced players looking to refine their skills.</p>
          </section>

          {/* Courses */}
          <section className="courses-section">
            <div className="section-header">
              <h2>Courses by John Smith</h2>
              <Link to="/courses" className="view-all">View all →</Link>
            </div>
            <div className="courses-grid">
              <div className="course-card">
                <div className="course-thumb">🎸</div>
                <div className="course-details">
                  <h3>Guitar Fundamentals</h3>
                  <p>Beginner • 18 lessons</p>
                  <div className="course-meta">
                    <span>⭐ 4.8</span>
                    <span>👥 5,000 students</span>
                  </div>
                </div>
              </div>
              <div className="course-card">
                <div className="course-thumb">🎸</div>
                <div className="course-details">
                  <h3>Advanced Rock Techniques</h3>
                  <p>Advanced • 24 lessons</p>
                  <div className="course-meta">
                    <span>⭐ 4.9</span>
                    <span>👥 3,200 students</span>
                  </div>
                </div>
              </div>
              <div className="course-card">
                <div className="course-thumb">🎸</div>
                <div className="course-details">
                  <h3>Blues Guitar Mastery</h3>
                  <p>Intermediate • 20 lessons</p>
                  <div className="course-meta">
                    <span>⭐ 4.9</span>
                    <span>👥 2,800 students</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="reviews-section">
            <h2>Student Reviews</h2>
            <div className="reviews-list">
              <div className="review-card">
                <div className="review-header">
                  <div className="reviewer">
                    <div className="avatar">M</div>
                    <div className="reviewer-info">
                      <div className="name">Mike R.</div>
                      <div className="rating">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <span className="date">2 weeks ago</span>
                </div>
                <p>John's teaching style is incredible. He breaks down complex concepts into easy-to-understand lessons. Highly recommend!</p>
              </div>
              <div className="review-card">
                <div className="review-header">
                  <div className="reviewer">
                    <div className="avatar">S</div>
                    <div className="reviewer-info">
                      <div className="name">Sarah L.</div>
                      <div className="rating">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <span className="date">1 month ago</span>
                </div>
                <p>Best guitar instructor I've ever had. His practical approach helped me improve faster than I ever thought possible.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-card">
            <h3>Achievements</h3>
            <div className="achievements-list">
              <div className="achievement">
                <span className="icon">🏆</span>
                <span>Grammy Winner (2018)</span>
              </div>
              <div className="achievement">
                <span className="icon">🎵</span>
                <span>Platinum Album (2015)</span>
              </div>
              <div className="achievement">
                <span className="icon">🌟</span>
                <span>Top Rated Instructor</span>
              </div>
            </div>
          </div>

          <div className="sidebar-card">
            <h3>Specialties</h3>
            <div className="specialties-list">
              <span className="specialty">Rock Guitar</span>
              <span className="specialty">Jazz Guitar</span>
              <span className="specialty">Blues Guitar</span>
              <span className="specialty">Songwriting</span>
              <span className="specialty">Music Theory</span>
            </div>
          </div>

          <div className="sidebar-card">
            <h3>Social Links</h3>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">🎵</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default InstructorProfile;
