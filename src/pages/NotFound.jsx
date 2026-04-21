import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notfound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      {/* Vinyl Watermark Background */}
      <div className="vinyl-gradient"></div>

      {/* Content Canvas */}
      <div className="content-canvas">
        {/* Broken Vinyl Illustration */}
        <div className="vinyl-container">
          <div className="vinyl-record">
            {/* Vinyl Center Label */}
            <div className="vinyl-center">
              <div className="center-hole"></div>
            </div>
            {/* Vinyl Grooves */}
            <div className="groove-1"></div>
            <div className="groove-2"></div>
            {/* The Crack */}
            <div className="crack"></div>
          </div>
          {/* Needle */}
          <div className="needle"></div>
        </div>

        {/* Error Card */}
        <div className="error-card">
          <div className="error-badge">
            <span>Error 404 // Needle Scratch</span>
          </div>
          <h1>This track got lost.</h1>
          <p>
            The frequency you're looking for has dropped out of the mix.
            It might have been moved to the archive or deleted from the master tape.
          </p>
          {/* Actions */}
          <div className="actions">
            <Link to="/dashboard" className="btn-primary">
              <span className="material-symbols-outlined">dashboard</span>
              Back to dashboard
            </Link>
            <Link to="/courses" className="btn-secondary">
              <span className="material-symbols-outlined">library_music</span>
              Browse courses
            </Link>
          </div>
        </div>

        {/* Suggested Courses */}
        <div className="suggested-courses">
          <div className="suggested-header">
            <h2>Suggested Masterclasses</h2>
            <div className="divider"></div>
            <span className="mono">Recommended for you</span>
          </div>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-image">
                <div className="new-badge">New</div>
              </div>
              <div className="course-info">
                <h3>Analog Mixing Masterclass</h3>
                <p className="instructor">Dr. Sarah Chen</p>
                <span className="mono">12 lessons • 6h 30m</span>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image"></div>
              <div className="course-info">
                <h3>Music Theory Fundamentals</h3>
                <p className="instructor">Prof. Michael Torres</p>
                <span className="mono">8 lessons • 4h 15m</span>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image"></div>
              <div className="course-info">
                <h3>Piano for Beginners</h3>
                <p className="instructor">Emma Thompson</p>
                <span className="mono">15 lessons • 8h 45m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
