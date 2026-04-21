import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/landing.css';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <span className="logo">Harmony</span>
            <div className="nav-links">
              <a href="#courses">Courses</a>
              <a href="#live">Live Sessions</a>
              <a href="#instructors">Instructors</a>
              <Link to="/subscription">Pricing</Link>
              <Link to="/community">Community</Link>
            </div>
          </div>
          <div className="nav-right">
            <MobileNav />
            <Link to="/login" className="ghost-button">Log in</Link>
            <button className="primary-button">Start Free Trial</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="eyebrow">BACKSTAGE PASS TO YOUR MUSIC CAREER</div>
            <h1>
              Learn music from the <span className="crimson">artists</span> who shaped it.
            </h1>
            <p className="hero-subtitle">
              Unlimited access to 500+ masterclasses, live sessions with Grammy winners,
              and a global community of musicians — one subscription.
            </p>
            <div className="hero-cta">
              <button className="primary-button large">Start 7-day Free Trial →</button>
              <button className="ghost-button large">
                <span>▶</span> Watch how it works
              </button>
            </div>
            <div className="social-proof">
              <div className="stars">★★★★★</div>
              <p>Trusted by 50,000+ musicians in 80 countries</p>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <div className="floating-card top">
                <div className="now-playing">
                  <div className="play-icon">▶</div>
                  <div className="track-info">
                    <div className="track-title">Piano Fundamentals</div>
                    <div className="chapter">Chapter 3: Intervals</div>
                  </div>
                </div>
              </div>
              <div className="floating-card bottom">
                <div className="instructor-info">
                  <div className="instructor-avatar">🎸</div>
                  <div className="instructor-details">
                    <div className="instructor-name">Grammy-winning producer</div>
                    <div className="course-count">3 courses</div>
                  </div>
                  <div className="verified">✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stats-container">
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Courses</div>
          </div>
          <div className="stat">
            <div className="stat-number">120+</div>
            <div className="stat-label">Artists</div>
          </div>
          <div className="stat">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Students</div>
          </div>
          <div className="stat">
            <div className="stat-number">80</div>
            <div className="stat-label">Countries</div>
          </div>
        </div>
      </section>

      {/* Featured Genres */}
      <section className="genres" id="courses">
        <div className="section-container">
          <h2>Pick your genre, find your flow.</h2>
          <div className="genre-grid">
            {['Rock', 'Electronic', 'Jazz', 'Hip-Hop', 'Classical', 'Indie'].map((genre) => (
              <div key={genre} className="genre-card">
                <div className="genre-image">{genre[0]}</div>
                <div className="genre-name">{genre}</div>
                <div className="genre-count">24 courses</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="section-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Subscribe in 60 seconds</h3>
            <p>Quick and easy signup with secure payment</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Pick your path</h3>
            <p>Choose your genre, instrument, and skill level</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Practice, perform, repeat</h3>
            <p>Learn at your pace, earn certificates</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <div className="section-container">
          <h1>Unlock the full library.</h1>
          <p>One subscription. 500+ courses. Zero lock-in.</p>
          <div className="pricing-toggle">
            <button className="toggle-btn active">Monthly</button>
            <button className="toggle-btn">
              Yearly <span className="best-value">Best value</span>
            </button>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">₹0</div>
              <p>7 days trial</p>
              <ul>
                <li>✓ Access to Starter courses</li>
                <li>✓ Community forum read-only</li>
                <li>✓ HD video quality</li>
              </ul>
              <button className="secondary-button">Start free trial</button>
            </div>
            <div className="pricing-card featured">
              <div className="ribbon">MOST POPULAR</div>
              <h3>Pro</h3>
              <div className="price">₹499<span>/month</span></div>
              <p>₹4,199/year (save 30%)</p>
              <ul>
                <li>✓ All 500+ courses</li>
                <li>✓ Live masterclasses</li>
                <li>✓ Downloadable lesson sheets</li>
                <li>✓ Progress certificates</li>
                <li>✓ Community full access</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="primary-button">Start Pro trial →</button>
            </div>
            <div className="pricing-card premium">
              <h3>Master</h3>
              <div className="price">₹999<span>/month</span></div>
              <p>₹9,990/year</p>
              <ul>
                <li>✓ Everything in Pro</li>
                <li>✓ 1-on-1 feedback sessions</li>
                <li>✓ Exclusive Grammy-artist workshops</li>
                <li>✓ Early access to new releases</li>
                <li>✓ Dedicated mentor</li>
              </ul>
              <button className="gold-button">Go Master</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">Harmony</div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#">Courses</a>
              <a href="#">Pricing</a>
              <a href="#">Live Sessions</a>
            </div>
            <div className="link-group">
              <h4>Learn</h4>
              <a href="#">Blog</a>
              <a href="#">Resources</a>
              <a href="#">Community</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Refund Policy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p> 2026 Harmony LMS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
