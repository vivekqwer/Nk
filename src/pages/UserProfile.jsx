import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/profile.css';

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    displayName: 'Alex Johnson',
    bio: 'Guitar enthusiast, learning to play for 2 years. Love rock and blues music.',
    primaryInstrument: 'Guitar',
    skillLevel: 'Intermediate',
    genres: ['Rock', 'Blues', 'Jazz'],
    country: 'India',
    city: 'Mumbai'
  });

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Save to API
  };

  return (
    <div className="user-profile">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">Harmony</Link>
            <div className="nav-links">
              <Link to="/dashboard" className="active">Dashboard</Link>
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

      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="header-content">
            <div className="avatar-large">A</div>
            <div className="profile-info">
              <div className="name-row">
                <h1>{profile.displayName}</h1>
                {isEditing ? (
                  <button className="save-btn" onClick={handleSave}>Save</button>
                ) : (
                  <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
                )}
              </div>
              <p className="bio">{profile.bio}</p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="value">3</span>
                  <span className="label">Courses</span>
                </div>
                <div className="stat">
                  <span className="value">14h</span>
                  <span className="label">Watched</span>
                </div>
                <div className="stat">
                  <span className="value">🔥 12</span>
                  <span className="label">Day Streak</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="profile-content">
          <div className="main-section">
            {/* About Section */}
            <section className="section">
              <h2>About</h2>
              {isEditing ? (
                <div className="edit-form">
                  <div className="form-group">
                    <label>Display Name</label>
                    <input
                      type="text"
                      value={profile.displayName}
                      onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Bio</label>
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      rows={4}
                      maxLength={160}
                    />
                    <span className="char-count">{profile.bio.length}/160</span>
                  </div>
                  <div className="form-group">
                    <label>Primary Instrument</label>
                    <select
                      value={profile.primaryInstrument}
                      onChange={(e) => setProfile({ ...profile, primaryInstrument: e.target.value })}
                    >
                      <option>Guitar</option>
                      <option>Piano</option>
                      <option>Drums</option>
                      <option>Bass</option>
                      <option>Vocals</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Skill Level</label>
                    <select
                      value={profile.skillLevel}
                      onChange={(e) => setProfile({ ...profile, skillLevel: e.target.value })}
                    >
                      <option>Complete Beginner</option>
                      <option>Hobbyist</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Pro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      value={profile.country}
                      onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      value={profile.city}
                      onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                    />
                  </div>
                </div>
              ) : (
                <div className="about-details">
                  <div className="detail-row">
                    <span className="label">Instrument</span>
                    <span className="value">{profile.primaryInstrument}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Skill Level</span>
                    <span className="value">{profile.skillLevel}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Genres</span>
                    <div className="genre-tags">
                      {profile.genres.map((genre) => (
                        <span key={genre} className="genre-tag">{genre}</span>
                      ))}
                    </div>
                  </div>
                  <div className="detail-row">
                    <span className="label">Location</span>
                    <span className="value">{profile.city}, {profile.country}</span>
                  </div>
                </div>
              )}
            </section>

            {/* Enrolled Courses */}
            <section className="section">
              <div className="section-header">
                <h2>My Courses</h2>
                <Link to="/courses" className="view-all">View all →</Link>
              </div>
              <div className="courses-grid">
                <div className="course-card">
                  <div className="course-thumb">🎸</div>
                  <div className="course-info">
                    <h3>Guitar Fundamentals</h3>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '62%' }}></div>
                    </div>
                    <span className="progress-text">62% complete</span>
                  </div>
                </div>
                <div className="course-card">
                  <div className="course-thumb">🎹</div>
                  <div className="course-info">
                    <h3>Piano Basics</h3>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '35%' }}></div>
                    </div>
                    <span className="progress-text">35% complete</span>
                  </div>
                </div>
                <div className="course-card">
                  <div className="course-thumb">🥁</div>
                  <div className="course-info">
                    <h3>Drum Patterns</h3>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '15%' }}></div>
                    </div>
                    <span className="progress-text">15% complete</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Certificates */}
            <section className="section">
              <h2>Certificates</h2>
              <div className="certificates-grid">
                <div className="certificate-card">
                  <div className="certificate-icon">🏆</div>
                  <div className="certificate-info">
                    <h3>Guitar Fundamentals</h3>
                    <p>Completed on March 15, 2026</p>
                  </div>
                  <button className="download-btn">Download</button>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-card">
              <h3>Settings</h3>
              <div className="settings-list">
                <Link to="/subscription" className="setting-item">
                  <span>💳</span>
                  <span>Subscription</span>
                </Link>
                <Link to="/forgot-password" className="setting-item">
                  <span>🔒</span>
                  <span>Change Password</span>
                </Link>
                <Link to="#" className="setting-item">
                  <span>🔔</span>
                  <span>Notifications</span>
                </Link>
                <Link to="#" className="setting-item">
                  <span>🎨</span>
                  <span>Appearance</span>
                </Link>
                <Link to="#" className="setting-item">
                  <span>🌐</span>
                  <span>Language</span>
                </Link>
              </div>
            </div>

            <div className="sidebar-card danger">
              <Link to="#" className="setting-item danger">
                <span>🚪</span>
                <span>Log Out</span>
              </Link>
              <Link to="#" className="setting-item danger">
                <span>🗑️</span>
                <span>Delete Account</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
