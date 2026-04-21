import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/set-new-password.css';

function SetNewPassword() {
  return (
    <div className="set-new-password-page">
      <main className="main-container">
        {/* Left Side: Editorial Canvas */}
        <section className="editorial-canvas">
          <div className="image-overlay">
            <img alt="Analog recording studio" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80" />
          </div>
          <div className="branding-content">
            <div>
              <div className="brand-logo">
                <span className="material-symbols-outlined">graphic_eq</span>
                <span className="brand-name">Harmony LMS</span>
              </div>
            </div>
            <div className="hero-content">
              <h2>
                Refine Your <br />
                <span className="highlight">Secure Access</span>
              </h2>
              <p>
                Precision in security is as vital as precision in pitch. Master your account with a stronger, updated credential.
              </p>
            </div>
            <div className="session-info">
              <div className="info-item">
                <span className="mono label">Session Code</span>
                <span className="mono value">RECOVER_B_440HZ</span>
              </div>
              <div className="divider"></div>
              <div className="info-item">
                <span className="mono label">Bit Depth</span>
                <span className="mono value">24-Bit Encrypted</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: The Form */}
        <section className="form-section">
          <div className="form-container">
            <header className="form-header">
              <div className="step-badge">Step 02 / Mastery Check</div>
              <h1>Set New Password</h1>
              <p>Ensure your new sequence is unique and robust.</p>
            </header>
            <form className="password-form">
              {/* New Password Field */}
              <div className="form-group">
                <label htmlFor="new-password">New Password</label>
                <div className="input-wrapper">
                  <input id="new-password" type="password" placeholder="••••••••••••" />
                  <button type="button">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <div className="input-wrapper">
                  <input id="confirm-password" type="password" placeholder="••••••••••••" />
                  <button type="button">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>

              {/* Password Strength Indicator */}
              <div className="password-strength">
                <div className="strength-bar">
                  <div className="strength-fill weak"></div>
                </div>
                <span className="strength-text">Weak</span>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn">
                Update Password
              </button>

              {/* Back to Login */}
              <div className="back-link">
                <Link to="/login">
                  <span className="material-symbols-outlined">arrow_back</span>
                  Back to login
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SetNewPassword;
