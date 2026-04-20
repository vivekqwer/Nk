import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/my-courses.css';

function MyCourses() {
  const [enrollments, setEnrollments] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // TODO: Fetch enrolled courses from API
    const mockEnrollments = [
      {
        _id: '1',
        course: {
          _id: '1',
          title: 'Guitar Fundamentals',
          coverImage: '🎸',
          instructor: { fullName: 'John Smith' },
          level: 'Beginner',
          duration: '4h 32m'
        },
        progress: 62,
        lastAccessed: '2 days ago',
        status: 'in-progress'
      },
      {
        _id: '2',
        course: {
          _id: '2',
          title: 'Piano Basics',
          coverImage: '🎹',
          instructor: { fullName: 'Sarah Johnson' },
          level: 'Beginner',
          duration: '3h 45m'
        },
        progress: 100,
        lastAccessed: '1 week ago',
        status: 'completed'
      },
      {
        _id: '3',
        course: {
          _id: '3',
          title: 'Jazz Improvisation',
          coverImage: '🎷',
          instructor: { fullName: 'Mike Davis' },
          level: 'Advanced',
          duration: '5h 20m'
        },
        progress: 15,
        lastAccessed: '3 days ago',
        status: 'in-progress'
      }
    ];
    setEnrollments(mockEnrollments);
  }, []);

  const filteredEnrollments = filter === 'all' 
    ? enrollments 
    : enrollments.filter(e => e.status === filter);

  return (
    <div className="my-courses">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">Harmony</Link>
            <div className="nav-links">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/my-courses" className="active">My Courses</Link>
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

      <div className="page-content">
        <div className="page-header">
          <h1>My Courses</h1>
          <p>{enrollments.length} courses enrolled</p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All ({enrollments.length})
          </button>
          <button 
            className={filter === 'in-progress' ? 'active' : ''} 
            onClick={() => setFilter('in-progress')}
          >
            In Progress ({enrollments.filter(e => e.status === 'in-progress').length})
          </button>
          <button 
            className={filter === 'completed' ? 'active' : ''} 
            onClick={() => setFilter('completed')}
          >
            Completed ({enrollments.filter(e => e.status === 'completed').length})
          </button>
        </div>

        {/* Course Grid */}
        <div className="course-grid">
          {filteredEnrollments.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📚</div>
              <h3>No courses found</h3>
              <p>Start learning by browsing our course catalog</p>
              <Link to="/courses" className="primary-button">Browse Courses</Link>
            </div>
          ) : (
            filteredEnrollments.map((enrollment) => (
              <Link 
                key={enrollment._id} 
                to={`/courses/${enrollment.course._id}`} 
                className="course-card"
              >
                <div className="card-image">{enrollment.course.coverImage}</div>
                <div className="card-content">
                  <div className="status-badge">
                    {enrollment.status === 'completed' ? '✓ Completed' : 'In Progress'}
                  </div>
                  <h3>{enrollment.course.title}</h3>
                  <div className="instructor">
                    <span>{enrollment.course.instructor.fullName}</span>
                    <span className="verified">✓</span>
                  </div>
                  <div className="meta">
                    <span>{enrollment.course.level}</span>
                    <span>{enrollment.course.duration}</span>
                  </div>
                  <div className="progress-section">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${enrollment.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{enrollment.progress}% complete</span>
                  </div>
                  <div className="last-accessed">
                    Last accessed {enrollment.lastAccessed}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCourses;
