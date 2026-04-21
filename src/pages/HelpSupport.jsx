import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/help-support.css';

function HelpSupport() {
  return (
    <div className="help-support">
      {/* TopAppBar */}
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <span className="logo">Harmony LMS</span>
            <nav className="nav-links">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/courses">Course Store</Link>
              <a href="#" className="active">Help Support</a>
            </nav>
          </div>
          <div className="navbar-right">
            <div className="search-bar">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="Quick search..." />
            </div>
            <button className="icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="icon-btn">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* SECTION 1: SEARCH HERO */}
        <section className="search-hero">
          <div className="hero-content">
            <h1>How can we help?</h1>
            <div className="search-input-wrapper">
              <span className="material-symbols-outlined search-icon">search</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search help articles, FAQs, guides…"
              />
            </div>
          </div>
        </section>

        <div className="content-container">
          {/* SECTION 2: QUICK LINKS GRID */}
          <section className="quick-links">
            <div className="links-grid">
              <a href="#" className="quick-link-card">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <h3>Getting started</h3>
                <p className="mono">Master the basics</p>
              </a>
              <a href="#" className="quick-link-card">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <h3>Subscription & billing</h3>
                <p className="mono">Manage your plan</p>
              </a>
              <a href="#" className="quick-link-card">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined">play_circle</span>
                </div>
                <h3>Video playback</h3>
                <p className="mono">Streaming issues</p>
              </a>
              <a href="#" className="quick-link-card">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <h3>Certificates</h3>
                <p className="mono">Claim your awards</p>
              </a>
              <a href="#" className="quick-link-card">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <h3>Community rules</h3>
                <p className="mono">Studio etiquette</p>
              </a>
              <a href="#" className="quick-link-card">
                <div className="icon-wrapper">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <h3>Account & privacy</h3>
                <p className="mono">Data & security</p>
              </a>
            </div>
          </section>

          {/* SECTION 3: POPULAR ARTICLES */}
          <section className="popular-articles">
            <div className="section-header">
              <h2>Popular Articles</h2>
              <span className="mono">Trending Topics</span>
            </div>
            <div className="articles-list">
              {[
                { title: 'How to export your final mix for Dolby Atmos', desc: 'A step-by-step guide to spatial audio mastering in the Studio.' },
                { title: 'Understanding Student Dashboard analytics', desc: 'Track your progress and engagement metrics effectively.' },
                { title: 'Troubleshooting MIDI connectivity issues', desc: 'Fix common latency and hardware recognition problems.' },
                { title: 'Collaborating on shared DAW projects', desc: 'Best practices for asynchronous studio collaboration.' },
                { title: 'Setting up your Home Studio workspace', desc: 'Essential gear and acoustic treatment for students.' },
                { title: 'Managing multi-track stems in the cloud', desc: 'How to utilize our unlimited cloud storage for sessions.' },
                { title: 'Updating your Artist Profile and Portfolio', desc: 'Make your public profile stand out to potential collaborators.' },
                { title: 'Harmony Pro: Subscription benefits', desc: 'Unlock exclusive sample packs and 1-on-1 mentorship.' },
                { title: 'Refund policy and course transfers', desc: 'Our 30-day money-back guarantee explained.' },
                { title: 'Accessing Harmony LMS Offline', desc: 'How to download course materials for on-the-go learning.' }
              ].map((article, index) => (
                <div key={index} className="article-item">
                  <div>
                    <h4>{article.title}</h4>
                    <p>{article.desc}</p>
                  </div>
                  <a href="#" className="read-link">
                    Read article <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: CONTACT CARD */}
          <section className="contact-card">
            <div className="contact-content">
              <div className="contact-info">
                <h2>Still stuck?</h2>
                <div className="contact-details">
                  <p className="email">support@harmonylms.io</p>
                  <p className="mono response-time">
                    <span className="material-symbols-outlined">schedule</span>
                    Expected reply: {"<"} 2 hours
                  </p>
                </div>
              </div>
              <div className="contact-action">
                <div className="chat-card">
                  <p>Need an instant answer?</p>
                  <button className="chat-btn">
                    <span className="material-symbols-outlined">forum</span>
                    Chat with us
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: STATUS + COMMUNITY */}
          <section className="status-section">
            <div className="status-indicator">
              <div className="status-dot"></div>
              <span>All systems operational</span>
              <div className="divider"></div>
              <a href="#" className="mono">View status page</a>
            </div>
            <div className="community-link">
              <span>Can't find it here?</span>
              <a href="#">Join our community</a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">Harmony LMS</span>
            <p className="mono">
              The Analog Master Design System. Built for the rhythm of digital learning.
            </p>
          </div>
          <div className="footer-links">
            <h5 className="mono">Legal</h5>
            <a href="#" className="mono">Privacy Policy</a>
            <a href="#" className="mono">Terms of Service</a>
          </div>
          <div className="footer-links">
            <h5 className="mono">Support</h5>
            <a href="#" className="mono">Studio Status</a>
            <a href="#" className="mono">Artist FAQ</a>
          </div>
          <div className="footer-newsletter">
            <h5 className="mono">Newsletter</h5>
            <div className="newsletter-form">
              <input type="email" placeholder="Artist Email" />
              <button className="send-btn">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="mono">© 2024 Harmony LMS. The Analog Master Design System.</p>
        </div>
      </footer>
    </div>
  );
}

export default HelpSupport;
