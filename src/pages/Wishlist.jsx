import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/wishlist.css';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // TODO: Fetch wishlist from API
    const mockWishlist = [
      {
        _id: '1',
        course: {
          _id: '1',
          title: 'Sculpting Sound with Modular Systems',
          coverImage: '🎛️',
          instructor: { fullName: 'David R.' },
          duration: '24h',
          genre: 'Electronic Music Theory',
          level: 'Advanced'
        }
      },
      {
        _id: '2',
        course: {
          _id: '2',
          title: 'Neoclassical Composition Secrets',
          coverImage: '🎹',
          instructor: { fullName: 'Sarah J.' },
          duration: '4.5h',
          genre: 'Piano Masterclass',
          level: 'Intermediate'
        }
      },
      {
        _id: '3',
        course: {
          _id: '3',
          title: 'The Art of Analog Mixing',
          coverImage: '🎚️',
          instructor: { fullName: 'Mike T.' },
          duration: '6.2h',
          genre: 'Studio Production',
          level: 'Advanced'
        }
      },
      {
        _id: '4',
        course: {
          _id: '4',
          title: 'Capturing Emotional Performance',
          coverImage: '🎤',
          instructor: { fullName: 'Liam O.' },
          duration: '3.8h',
          genre: 'Vocal Training',
          level: 'Beginner'
        }
      }
    ];
    setWishlist(mockWishlist);
  }, []);

  const totalHours = wishlist.reduce((sum, item) => {
    const hours = parseFloat(item.course.duration);
    return sum + (isNaN(hours) ? 0 : hours);
  }, 0);

  return (
    <div className="wishlist">
      {/* Mobile Nav */}
      <nav className="mobile-nav">
        <Link to="/dashboard" className="nav-item">
          <span>📊</span>
          <span>Hub</span>
        </Link>
        <Link to="/wishlist" className="nav-item active">
          <span>❤️</span>
          <span>Saved</span>
        </Link>
        <Link to="/live" className="nav-item">
          <span>🎵</span>
          <span>Sessions</span>
        </Link>
        <Link to="/profile" className="nav-item">
          <span>👤</span>
          <span>Profile</span>
        </Link>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="desktop-sidebar">
        <div className="sidebar-header">
          <h1>Harmony Admin</h1>
          <p>Analog Master Level</p>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-link">
            <span>📊</span>
            <span>Dashboard</span>
          </Link>
          <Link to="/live" className="nav-link">
            <span>🎙️</span>
            <span>Live Sessions</span>
          </Link>
          <Link to="/wishlist" className="nav-link active">
            <span>❤️</span>
            <span>Wishlist</span>
          </Link>
          <Link to="/admin" className="nav-link">
            <span>📈</span>
            <span>Analytics</span>
          </Link>
          <Link to="/admin" className="nav-link">
            <span>⚙️</span>
            <span>Admin</span>
          </Link>
        </nav>
        <button className="go-live-btn">Go Live</button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="page-header">
          <div className="header-left">
            <h1>Harmony LMS</h1>
            <nav className="header-nav">
              <Link to="/courses">Live Hub</Link>
              <Link to="/wishlist" className="active">Wishlist</Link>
              <Link to="/my-courses">Library</Link>
            </nav>
          </div>
          <div className="header-right">
            <button>👤</button>
            <button>⚙️</button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <h2>The Reserved <span className="italic">Stage</span></h2>
          <p>
            Your curated collection of premium masterclasses. From analog synthesis to orchestral scoring, 
            your next breakthrough is waiting here.
          </p>
        </section>

        {/* Wishlist Grid */}
        <section className="wishlist-grid">
          {/* Featured Course */}
          <div className="featured-course">
            <div className="course-image">🎛️</div>
            <div className="course-overlay">
              <span className="course-badge">Advanced Masterclass</span>
            </div>
            <div className="course-footer">
              <div>
                <p className="course-genre">Electronic Music Theory</p>
                <h3>Sculpting Sound with Modular Systems</h3>
              </div>
              <div className="course-actions">
                <button className="remove-btn">Remove</button>
                <button className="start-btn">Start Now</button>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="stats-card">
            <div className="stats-icon">🎵</div>
            <div>
              <span className="stats-label">Quick Statistics</span>
              <h4>{totalHours.toFixed(1)} Hours</h4>
              <p>Total learning waiting in your wishlist.</p>
            </div>
            <div className="progress-section">
              <div className="progress-label">
                <span>Progress potential</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          {/* Upgrade Card */}
          <div className="upgrade-card">
            <h4>Upgrade to Harmony Pro</h4>
            <p>Unlock unlimited access to all wishlist items for a flat monthly fee.</p>
            <button className="upgrade-btn">
              View Pricing <span>→</span>
            </button>
          </div>

          {/* Course Cards */}
          {wishlist.slice(1).map((item) => (
            <div key={item._id} className="course-card">
              <div className="card-image">{item.course.coverImage}</div>
              <div className="card-content">
                <div className="card-header">
                  <span className="card-genre">{item.course.genre}</span>
                  <span className="card-duration">{item.course.duration}</span>
                </div>
                <h4>{item.course.title}</h4>
                <div className="card-actions">
                  <button className="remove-btn">Remove</button>
                  <button className="start-btn">Start</button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Empty State */}
        <div className="explore-section">
          <h5>Hunting for something specific?</h5>
          <p>Explore our library of over 500+ specialized courses curated by industry legends and analog masters.</p>
          <Link to="/courses" className="explore-btn">Explore Library</Link>
        </div>
      </main>
    </div>
  );
}

export default Wishlist;
