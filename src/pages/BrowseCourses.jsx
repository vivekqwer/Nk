import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/catalog.css';

function BrowseCourses() {
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({
    genre: '',
    level: '',
    search: ''
  });

  useEffect(() => {
    // TODO: Fetch courses from API
    const mockCourses = [
      {
        _id: '1',
        title: 'Guitar Fundamentals',
        coverImage: '🎸',
        instructor: { fullName: 'John Smith', avatar: null },
        genre: 'Rock',
        level: 'Beginner',
        duration: 270,
        lessonCount: 18,
        rating: { average: 4.8, count: 2100 },
        enrollmentCount: 5000,
        isLive: false
      },
      {
        _id: '2',
        title: 'Jazz Piano Mastery',
        coverImage: '🎹',
        instructor: { fullName: 'Sarah Johnson', avatar: null },
        genre: 'Jazz',
        level: 'Intermediate',
        duration: 480,
        lessonCount: 24,
        rating: { average: 4.9, count: 1800 },
        enrollmentCount: 3500,
        isLive: true
      },
      {
        _id: '3',
        title: 'Electronic Music Production',
        coverImage: '🎛️',
        instructor: { fullName: 'Mike Chen', avatar: null },
        genre: 'Electronic',
        level: 'Advanced',
        duration: 600,
        lessonCount: 32,
        rating: { average: 4.7, count: 1200 },
        enrollmentCount: 2800,
        isLive: false
      }
    ];
    setCourses(mockCourses);
  }, []);

  return (
    <div className="browse-courses">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <a href="/" className="logo">Harmony</a>
            <div className="nav-links">
              <a href="/dashboard">Dashboard</a>
              <a href="/courses" className="active">Courses</a>
              <Link to="/my-courses">My Courses</Link>
              <a href="#live">Live</a>
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
      <section className="catalog-header">
        <div className="section-container">
          <h1>Explore the Harmony library</h1>
          <p>500+ courses across 12 genres. New masterclasses every week.</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="filter-bar">
        <div className="section-container">
          <div className="filter-left">
            <input
              type="text"
              placeholder="Search courses, instructors, genres…"
              className="search-input"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
          </div>
          <div className="filter-right">
            <select
              className="filter-select"
              value={filters.genre}
              onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
            >
              <option value="">All Genres</option>
              <option value="Rock">Rock</option>
              <option value="Jazz">Jazz</option>
              <option value="Electronic">Electronic</option>
              <option value="Classical">Classical</option>
            </select>
            <select
              className="filter-select"
              value={filters.level}
              onChange={(e) => setFilters({ ...filters, level: e.target.value })}
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <select className="filter-select">
              <option>Most popular</option>
              <option>Newest</option>
              <option>Highest rated</option>
              <option>Shortest first</option>
            </select>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="course-catalog">
        <div className="section-container">
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course._id} className="course-card">
                <div className="card-image">
                  {course.isLive && <span className="live-badge">● LIVE</span>}
                  <span className="level-tag">{course.level}</span>
                  {course.coverImage}
                </div>
                <div className="card-content">
                  <div className="genre-tag">{course.genre}</div>
                  <h3>{course.title}</h3>
                  <div className="instructor">
                    <Link to="/instructor/1">{course.instructor.fullName}</Link>
                    <span className="verified">✓</span>
                  </div>
                  <div className="meta">
                    <span>⏱ {Math.floor(course.duration / 60)}h {course.duration % 60}m</span>
                    <span>📚 {course.lessonCount} lessons</span>
                    <span>⭐ {course.rating.average} ({course.rating.count})</span>
                  </div>
                  <Link to={`/courses/${course._id}`} className="primary-button full-width">▶ View</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrowseCourses;
