import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/course-detail.css';

function CourseDetail() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    // TODO: Fetch course data from API
    const mockCourse = {
      _id: courseId,
      title: 'Guitar Fundamentals',
      subtitle: 'Master the basics of guitar playing',
      description: 'Learn guitar from scratch with this comprehensive beginner course. Cover everything from holding the instrument to playing your first songs.',
      instructor: {
        fullName: 'John Smith',
        avatar: 'JS',
        verified: true,
        bio: 'Grammy-winning guitarist with 20+ years of experience'
      },
      level: 'Beginner',
      duration: '4h 32m',
      lessons: 18,
      rating: 4.8,
      students: 5234,
      price: 499,
      genres: ['Rock', 'Pop'],
      coverImage: '🎸',
      curriculum: [
        { id: 1, title: 'Introduction to Guitar', duration: '15:00', preview: true },
        { id: 2, title: 'Holding the Guitar', duration: '12:30', preview: true },
        { id: 3, title: 'Basic Chords', duration: '25:00', preview: false },
        { id: 4, title: 'Strumming Patterns', duration: '20:00', preview: false },
        { id: 5, title: 'Your First Song', duration: '30:00', preview: false },
        { id: 6, title: 'Fingerpicking Basics', duration: '22:00', preview: false },
        { id: 7, title: 'Reading Tablature', duration: '18:00', preview: false },
        { id: 8, title: 'Practice Routines', duration: '28:00', preview: false }
      ],
      features: [
        '18 video lessons',
        'Downloadable resources',
        'Certificate of completion',
        'Lifetime access',
        'Community access'
      ],
      requirements: ['No prior experience needed', 'Guitar (acoustic or electric)']
    };
    setCourse(mockCourse);
  }, [courseId]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="course-detail">
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

      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-content">
          <div className="breadcrumb">
            <Link to="/courses">Courses</Link>
            <span>/</span>
            <span>{course.genres[0]}</span>
          </div>
          
          <div className="course-header">
            <div className="level-badge">{course.level}</div>
            <h1>{course.title}</h1>
            <p className="subtitle">{course.subtitle}</p>
            
            <div className="course-meta">
              <div className="meta-item">
                <span className="icon">⏱</span>
                <span>{course.duration}</span>
              </div>
              <div className="meta-item">
                <span className="icon">📚</span>
                <span>{course.lessons} lessons</span>
              </div>
              <div className="meta-item">
                <span className="icon">⭐</span>
                <span>{course.rating}</span>
              </div>
              <div className="meta-item">
                <span className="icon">👥</span>
                <span>{course.students.toLocaleString()} students</span>
              </div>
            </div>
          </div>

          <div className="instructor-card">
            <div className="instructor-avatar">{course.instructor.avatar}</div>
            <div className="instructor-info">
              <div className="instructor-name">
                {course.instructor.fullName}
                {course.instructor.verified && <span className="verified">✓</span>}
              </div>
              <p className="instructor-bio">{course.instructor.bio}</p>
            </div>
          </div>
        </div>

        <div className="course-preview">
          <div className="preview-card">
            <div className="preview-image">{course.coverImage}</div>
            <div className="preview-overlay">
              <button className="play-button">▶</button>
              <span>Watch Preview</span>
            </div>
          </div>
          <div className="enroll-card">
            <div className="price">₹{course.price}</div>
            <p className="price-note">One-time payment</p>
            {enrolled ? (
              <Link to={`/courses/${course._id}`} className="primary-button">
                Continue Learning
              </Link>
            ) : (
              <Link to="/checkout" className="primary-button">
                Enroll Now
              </Link>
            )}
            <button className="secondary-button">Add to Wishlist</button>
            <div className="guarantee">
              <span className="icon">🛡️</span>
              <span>7-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="course-description">
        <div className="section-container">
          <h2>About This Course</h2>
          <p>{course.description}</p>
          
          <div className="features-grid">
            {course.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="icon">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="requirements">
            <h3>Requirements</h3>
            <ul>
              {course.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="course-curriculum">
        <div className="section-container">
          <h2>Course Curriculum</h2>
          <p className="section-subtitle">{course.lessons} lessons • {course.duration} total</p>
          
          <div className="curriculum-list">
            {course.curriculum.map((lesson, index) => (
              <div key={lesson.id} className="curriculum-item">
                <div className="lesson-number">{index + 1}</div>
                <div className="lesson-info">
                  <h4>{lesson.title}</h4>
                  <span className="duration">{lesson.duration}</span>
                </div>
                {lesson.preview && (
                  <button className="preview-badge">Preview</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="course-reviews">
        <div className="section-container">
          <h2>Student Reviews</h2>
          
          <div className="reviews-summary">
            <div className="rating-large">
              <span className="score">{course.rating}</span>
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="count">{course.students} reviews</span>
            </div>
          </div>

          <div className="reviews-list">
            {[1, 2, 3].map((i) => (
              <div key={i} className="review-card">
                <div className="review-header">
                  <div className="reviewer-avatar">M</div>
                  <div className="reviewer-info">
                    <div className="reviewer-name">Mike R.</div>
                    <div className="reviewer-rating">⭐⭐⭐⭐⭐</div>
                  </div>
                  <span className="review-date">2 weeks ago</span>
                </div>
                <p className="review-text">
                  This course transformed my playing. The instructor breaks down complex concepts into easy-to-understand lessons. Highly recommend!
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="related-courses">
        <div className="section-container">
          <h2>You Might Also Like</h2>
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
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;
