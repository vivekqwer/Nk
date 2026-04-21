import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/search-results.css';

function SearchResults() {
  const [searchQuery, setSearchQuery] = useState('fingerpicking');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // TODO: Fetch search results from API
  }, [searchQuery]);

  return (
    <div className="search-results">
      <header className="search-header">
        <div className="header-content">
          <div className="header-left">
            <Link to="/" className="logo">AnalogLMS</Link>
            <nav className="header-nav">
              <Link to="/courses">Courses</Link>
              <Link to="/my-courses">Library</Link>
              <Link to="/live">Studios</Link>
            </nav>
          </div>
          <div className="header-right">
            <button>🔔</button>
            <button>⚙️</button>
            <div className="avatar">👤</div>
          </div>
        </div>
      </header>

      <main className="search-main">
        <section className="search-section">
          <div className="search-bar-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search the archive..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="search-shortcut">⌘ K</div>
          </div>

          <div className="filter-tabs">
            <button 
              className={activeFilter === 'all' ? 'active' : ''} 
              onClick={() => setActiveFilter('all')}
            >
              All (142)
            </button>
            <button 
              className={activeFilter === 'courses' ? 'active' : ''} 
              onClick={() => setActiveFilter('courses')}
            >
              Courses (12)
            </button>
            <button 
              className={activeFilter === 'lessons' ? 'active' : ''} 
              onClick={() => setActiveFilter('lessons')}
            >
              Lessons (84)
            </button>
            <button 
              className={activeFilter === 'instructors' ? 'active' : ''} 
              onClick={() => setActiveFilter('instructors')}
            >
              Instructors (6)
            </button>
            <button 
              className={activeFilter === 'community' ? 'active' : ''} 
              onClick={() => setActiveFilter('community')}
            >
              Community (40)
            </button>
          </div>
        </section>

        <section className="featured-section">
          <div className="section-header">
            <h2>Featured Courses</h2>
            <Link to="/courses">View Archive →</Link>
          </div>

          <div className="featured-courses">
            <div className="featured-card">
              <div className="card-image">🎸</div>
              <div className="card-badge">Masterclass</div>
              <div className="card-content">
                <h3>The Fingerstyle Architect</h3>
                <p>Deconstruct complex patterns from folk, blues, and classical traditions.</p>
                <div className="card-footer">
                  <div className="instructor">
                    <div className="instructor-avatar">DR</div>
                    <span>David R.</span>
                  </div>
                  <span className="duration">24 HOURS</span>
                </div>
              </div>
            </div>

            <div className="featured-card">
              <div className="card-image">🎵</div>
              <div className="card-badge new">New Release</div>
              <div className="card-content">
                <h3>Modern Travis Picking</h3>
                <p>Master the syncopated thumb and finger patterns that define American folk.</p>
                <div className="card-footer">
                  <div className="instructor">
                    <div className="instructor-avatar">EV</div>
                    <span>Elena Voss</span>
                  </div>
                  <span className="duration">12 HOURS</span>
                </div>
              </div>
            </div>

            <div className="featured-card">
              <div className="card-image">🎸</div>
              <div className="card-badge intermediate">Intermediate</div>
              <div className="card-content">
                <h3>Blues Fingerstyle Deep-Dive</h3>
                <p>Learn the Delta secrets of the masters: bass thumping and slide work.</p>
                <div className="card-footer">
                  <div className="instructor">
                    <div className="instructor-avatar">JW</div>
                    <span>Junior Wells II</span>
                  </div>
                  <span className="duration">30 HOURS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="content-grid">
          <section className="lessons-section">
            <div className="section-title">
              <span>🎬</span>
              <h2>Latest Lessons</h2>
            </div>

            <div className="lessons-list">
              {[
                { id: 1, title: 'Indie Fingerpicking Basics', subtitle: 'The Foundation of Folk • 14:22' },
                { id: 2, title: 'Percussive Slaps & Taps', subtitle: 'Advanced Techniques • 28:05' },
                { id: 3, title: 'Alternating Bass Patterns', subtitle: 'Essential Drills • 09:45' },
                { id: 4, title: 'Using a Thumbpick Effectively', subtitle: 'Tone Mastery • 15:30' }
              ].map((lesson) => (
                <div key={lesson.id} className="lesson-item">
                  <div className="lesson-number">{lesson.id}</div>
                  <div className="lesson-info">
                    <h4>{lesson.title}</h4>
                    <p>{lesson.subtitle}</p>
                  </div>
                  <button className="favorite-btn">❤️</button>
                </div>
              ))}
            </div>
          </section>

          <section className="instructors-section">
            <div className="section-title">
              <span>👥</span>
              <h2>Instructors</h2>
            </div>

            <div className="instructors-list">
              {[
                { name: 'Sarah Jenkins', specialty: 'Classical Fusion', avatar: 'SJ' },
                { name: "Liam O'Conner", specialty: 'Celtic Folk', avatar: 'LO' },
                { name: 'Mika Tanaka', specialty: 'Jazz Fingerstyle', avatar: 'MT' }
              ].map((instructor, index) => (
                <div key={index} className="instructor-item">
                  <div className="instructor-avatar">{instructor.avatar}</div>
                  <div>
                    <h4>{instructor.name}</h4>
                    <p>{instructor.specialty}</p>
                  </div>
                </div>
              ))}
              <button className="explore-all-btn">Explore All 42 Teachers</button>
            </div>

            <div className="upgrade-card">
              <h3>Upgrade to Pro</h3>
              <p>Get unlimited access to tabs, backing tracks, and 1-on-1 feedback for 'fingerpicking' courses.</p>
              <button className="upgrade-btn">Get Started</button>
            </div>
          </section>
        </div>
      </main>

      <footer className="search-footer">
        <div className="footer-content">
          <p>© 2024 Analog Master LMS. All Rights Reserved.</p>
          <nav className="footer-nav">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Instructor Portal</a>
          </nav>
          <div className="footer-icons">
            <button>🎵</button>
            <button>🎙️</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SearchResults;
