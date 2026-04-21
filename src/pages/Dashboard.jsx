import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/dashboard.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    // TODO: Fetch user data and enrollments from API
    const mockUser = {
      fullName: 'Alex Johnson',
      avatar: null,
      genres: ['Rock', 'Jazz'],
      skillLevel: 'Intermediate',
      subscription: { plan: 'Pro', status: 'active', endDate: '2026-05-20' },
      stats: { hoursWatched: 12, streak: 5, certificates: 1 }
    };

    const mockEnrollments = [
      {
        _id: '1',
        course: {
          title: 'Guitar Fundamentals',
          coverImage: '🎸',
          instructor: { fullName: 'John Smith' },
          level: 'Beginner'
        },
        progress: 62,
        lastAccessedLesson: { title: 'Chapter 4: Chords' }
      }
    ];

    setUser(mockUser);
    setEnrollments(mockEnrollments);
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">Harmony</Link>
            <div className="nav-links">
              <Link to="/dashboard" className="active">Dashboard</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/my-courses">My Courses</Link>
              <Link to="/wishlist">Wishlist</Link>
              <a href="#live">Live</a>
              <Link to="/community">Community</Link>
            </div>
          </div>
          <div className="nav-right">
            <MobileNav />
            <div className="search-icon">🔍</div>
            <div className="notifications">🔔</div>
            <Link to="/profile" className="avatar">{user.fullName[0]}</Link>
          </div>
        </div>
      </nav>

      {/* Greeting Section */}
      <section className="greeting">
        <div className="section-container">
          <h1>Welcome back, {user.fullName.split(' ')[0]}.</h1>
          <p>You're 62% through Guitar Fundamentals — one session away from your first certificate. 🎸</p>
          <div className="continue-watching">
            <div className="course-thumb">🎸</div>
            <div className="course-info">
              <h3>Guitar Fundamentals</h3>
              <p>Next: Chapter 4: Chords</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '62%' }}></div>
              </div>
            </div>
            <button className="primary-button">▶ Resume</button>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="stats-row">
        <div className="section-container">
          <div className="stat-card">
            <div className="stat-value text-crimson">14h</div>
            <div className="stat-label">This week</div>
            <div className="stat-trend text-green">↑ +2h vs last week</div>
          </div>
          <div className="stat-card">
            <div className="stat-value text-gold">🔥 12 days</div>
            <div className="stat-label">Active streak</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">3</div>
            <div className="stat-label">Courses in progress</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">🏆 2</div>
            <div className="stat-label">Certificates earned</div>
          </div>
        </div>
      </section>

      {/* Continue Learning */}
      <section className="continue-learning">
        <div className="section-header">
          <h2>Pick up where you left off</h2>
          <Link to="/courses" className="view-all">View all →</Link>
        </div>
        <div className="course-grid">
          {enrollments.map((enrollment) => (
            <div key={enrollment._id} className="course-card">
              <div className="card-image">{enrollment.course.coverImage}</div>
              <div className="card-content">
                <div className="genre-tag">Rock</div>
                <h3>{enrollment.course.title}</h3>
                <div className="instructor">
                  <span>{enrollment.course.instructor.fullName}</span>
                  <span className="verified">✓</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${enrollment.progress}%` }}></div>
                </div>
                <Link to="/courses/1" className="continue-btn">▶ Continue</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended */}
      <section className="recommended">
        <div className="section-header">
          <h2>Because you love Rock + Guitar</h2>
        </div>
        <div className="course-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="course-card">
              <div className="card-image">🎸</div>
              <div className="card-content">
                <div className="genre-tag">Rock</div>
                <h3>Advanced Rock Techniques</h3>
                <div className="instructor">
                  <span>Jane Doe</span>
                  <span className="verified">✓</span>
                </div>
                <div className="meta">
                  <span>⏱ 4h 32m</span>
                  <span>📚 18 lessons</span>
                  <span>⭐ 4.8</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Status */}
      <section className="subscription-status">
        <div className="section-container">
          <div className="subscription-card bg-green-soft">
            <div className="subscription-info">
              <span className="status-badge">Active subscription</span>
              <p>Pro Plan • Renews on {new Date(user.subscription.endDate).toLocaleDateString()}</p>
              <p>₹499/month</p>
            </div>
            <Link to="/subscription" className="ghost-button">Manage plan</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
