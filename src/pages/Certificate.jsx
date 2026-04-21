import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/certificate.css';

function Certificate() {
  return (
    <div className="certificate-page">
      {/* Top Navigation */}
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <span className="logo">Harmony LMS</span>
          </div>
          <nav className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/courses">Course Store</Link>
            <a href="#" className="active">Certificates</a>
          </nav>
          <div className="navbar-right">
            <div className="search-bar">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="Search studio..." />
            </div>
            <div className="icon-buttons">
              <button className="icon-btn">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="icon-btn">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* SECTION 1: EARNED BANNER */}
        <section className="earned-banner">
          <h2>
            <span className="material-symbols-outlined filled">emoji_events</span>
            Certificate earned — Analog Synthesis Masterclass
          </h2>
          <div className="banner-actions">
            <button className="action-btn">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="action-btn">
              <span className="material-symbols-outlined">download</span>
            </button>
            <button className="action-btn">
              <span className="material-symbols-outlined">print</span>
            </button>
          </div>
        </section>

        {/* SECTION 2: CERTIFICATE PREVIEW CARD */}
        <section className="certificate-preview">
          <div className="certificate-card">
            {/* Watermark Background */}
            <div className="watermark">
              <span className="material-symbols-outlined">workspace_premium</span>
            </div>
            <div className="certificate-content">
              <div className="certificate-header">
                <div className="logo-section">
                  <span className="material-symbols-outlined filled">album</span>
                  <span className="brand">Harmony</span>
                </div>
                <h1>Certificate of Completion</h1>
                <div className="recipient">
                  <p>This is to certify that</p>
                  <h2>Julian V. Sterling</h2>
                </div>
                <div className="course">
                  <p>has successfully mastered the requirements of</p>
                  <h3>Analog Synthesis Masterclass</h3>
                </div>
              </div>
              <div className="certificate-footer">
                <div className="signature-section">
                  <div className="signature">
                    <div className="signature-img"></div>
                    <p className="mono">Lead Instructor</p>
                  </div>
                  <div className="qr-section">
                    <div className="qr-code"></div>
                    <p className="mono">ID: HMS-8821-X-SYNC</p>
                  </div>
                  <div className="signature">
                    <div className="signature-img"></div>
                    <p className="mono">Harmony Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ACTIONS ROW */}
        <section className="actions-row">
          <button className="action-card primary">
            <span className="material-symbols-outlined">picture_as_pdf</span>
            <span className="mono">Download PDF</span>
          </button>
          <button className="action-card linkedin">
            <span className="material-symbols-outlined">share_reviews</span>
            <span className="mono">LinkedIn</span>
          </button>
          <button className="action-card instagram">
            <span className="material-symbols-outlined">photo_camera</span>
            <span className="mono">Instagram</span>
          </button>
          <button className="action-card verify">
            <span className="material-symbols-outlined">verified</span>
            <span className="mono">Verify online</span>
          </button>
        </section>

        {/* SECTION 4: CONGRATULATIONS CARD */}
        <section className="congratulations-card">
          <div className="congrats-content">
            <div className="congrats-header">
              <h2>Congratulations, Maestro.</h2>
              <p>You've unlocked the secrets of the signal path. Ready for the next stage of your sonic journey?</p>
            </div>
            <div className="next-courses">
              <div className="section-header">
                <h3>What's next?</h3>
                <a href="#">
                  Explore all courses <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="course-grid">
                <div className="course-card">
                  <div className="course-image intermediate">
                    <span className="tag">Intermediate</span>
                  </div>
                  <h4>Advanced Modular Patching</h4>
                  <p className="mono">12 Modules • 8 Hours</p>
                </div>
                <div className="course-card">
                  <div className="course-image expert">
                    <span className="tag">Expert</span>
                  </div>
                  <h4>The Art of Tape Saturation</h4>
                  <p className="mono">8 Modules • 5 Hours</p>
                </div>
                <div className="course-card">
                  <div className="course-image bonus">
                    <span className="tag">Bonus</span>
                  </div>
                  <h4>Live Performance Essentials</h4>
                  <p className="mono">15 Modules • 10 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">Harmony LMS</span>
            <p className="mono">The Analog Master Design System.</p>
          </div>
          <div className="footer-links">
            <h5>Resources</h5>
            <a href="#" className="mono">Artist FAQ</a>
            <a href="#" className="mono">Studio Status</a>
          </div>
          <div className="footer-links">
            <h5>Legal</h5>
            <a href="#" className="mono">Privacy Policy</a>
            <a href="#" className="mono">Terms of Service</a>
          </div>
          <div className="footer-social">
            <h5>Social</h5>
            <div className="social-icons">
              <button className="social-btn">
                <span className="material-symbols-outlined">brand_awareness</span>
              </button>
              <button className="social-btn">
                <span className="material-symbols-outlined">podcasts</span>
              </button>
              <button className="social-btn">
                <span className="material-symbols-outlined">graphic_eq</span>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="mono">© 2024 Harmony LMS. All Rights Reserved.</p>
          <div className="studio-status">
            <span className="material-symbols-outlined filled">sensors</span>
            <span className="mono">Studio Live: Session Active</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Certificate;
