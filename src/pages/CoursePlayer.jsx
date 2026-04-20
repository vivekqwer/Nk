import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/course-player.css';

function CoursePlayer() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const lessons = [
    { id: 1, title: 'Introduction', duration: '5:30', completed: true },
    { id: 2, title: 'Getting Started', duration: '8:45', completed: true },
    { id: 3, title: 'Basic Techniques', duration: '12:20', completed: true },
    { id: 4, title: 'Chord Progressions', duration: '15:00', completed: false },
    { id: 5, title: 'Practice Exercises', duration: '10:30', completed: false },
    { id: 6, title: 'Advanced Patterns', duration: '18:45', completed: false },
    { id: 7, title: 'Song Analysis', duration: '20:00', completed: false },
    { id: 8, title: 'Final Project', duration: '25:00', completed: false }
  ];

  return (
    <div className="course-player">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">Harmony</Link>
            <div className="nav-links">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/courses" className="active">Courses</Link>
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
      {/* Video Player Area */}
      <div className="video-container">
        <div className="video-player">
          {isPlaying ? (
            <div className="video-content">
              <div className="video-placeholder">▶️ Playing video...</div>
              <div className="video-controls">
                <button className="control-btn">⏮</button>
                <button className="control-btn" onClick={() => setIsPlaying(false)}>⏸</button>
                <button className="control-btn">⏭</button>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '35%' }}></div>
                </div>
                <span className="time">3:45 / 10:30</span>
              </div>
            </div>
          ) : (
            <div className="video-thumbnail">
              <div className="play-button" onClick={() => setIsPlaying(true)}>▶</div>
              <div className="lesson-info">
                <h3>{lessons[currentLesson].title}</h3>
                <p>{lessons[currentLesson].duration}</p>
              </div>
            </div>
          )}
        </div>

        {/* Course Info */}
        <div className="course-info">
          <div className="breadcrumb">
            <Link to="/courses">Courses</Link>
            <span>/</span>
            <span>Guitar Fundamentals</span>
          </div>
          <h1>Chapter 4: Chord Progressions</h1>
          <p>Learn the most common chord progressions used in popular music and how to transition between them smoothly.</p>

          <div className="instructor">
            <div className="avatar">JS</div>
            <div className="instructor-details">
              <div className="name">John Smith</div>
              <div className="role">Guitar Instructor</div>
            </div>
            <span className="verified">✓</span>
          </div>

          <div className="course-stats">
            <div className="stat">
              <span>📚</span>
              <span>18 lessons</span>
            </div>
            <div className="stat">
              <span>⏱</span>
              <span>4h 32m</span>
            </div>
            <div className="stat">
              <span>🎯</span>
              <span>Beginner</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Lesson List */}
      <div className="lesson-sidebar">
        <div className="sidebar-header">
          <h2>Course Content</h2>
          <div className="progress-indicator">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '37.5%' }}></div>
            </div>
            <span>3/8 completed</span>
          </div>
        </div>

        <div className="lessons-list">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`lesson-item ${lesson.completed ? 'completed' : ''} ${index === currentLesson ? 'active' : ''}`}
              onClick={() => setCurrentLesson(index)}
            >
              <div className="lesson-number">
                {lesson.completed ? '✓' : index + 1}
              </div>
              <div className="lesson-details">
                <div className="lesson-title">{lesson.title}</div>
                <div className="lesson-duration">{lesson.duration}</div>
              </div>
              {index === currentLesson && <div className="playing-indicator">▶</div>}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <button className="secondary-button">Download Resources</button>
          <button className="ghost-button">View Certificate</button>
        </div>
      </div>
    </div>
  );
}

export default CoursePlayer;
