import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/admin-login.css';

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement admin login API call
    console.log('Admin login:', formData);
  };

  return (
    <div className="admin-login">
      <div className="background-grid"></div>
      <div className="glow-primary"></div>
      <div className="glow-secondary"></div>
      
      <main className="login-container">
        <div className="login-card">
          <div className="card-top-border"></div>
          
          <header className="login-header">
            <div className="security-badge">
              <div className="badge-icon">🔒</div>
              <span className="badge-text">Encrypted Node 04</span>
            </div>
            <h1 className="logo">Harmony LMS</h1>
            <p className="subtitle">Analog Master Control Access</p>
          </header>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Admin Identity</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  id="email"
                  type="email"
                  placeholder="master@harmony.audio"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Access Key</label>
              <div className="input-wrapper">
                <span className="input-icon">🔑</span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember node</span>
              </label>
              <Link to="/forgot-password" className="reset-link">Reset Key?</Link>
            </div>

            <button type="submit" className="submit-btn">
              Initialize Session
              <span className="arrow">→</span>
            </button>
          </form>

          <footer className="login-footer">
            <div className="status-indicators">
              <div className="status-item">
                <div className="status-dot"></div>
                <span>Server Status: High</span>
              </div>
              <div className="status-item">
                <span className="lock-icon">🔒</span>
                <span>256-bit AES</span>
              </div>
            </div>
          </footer>
        </div>

        <div className="bottom-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-text">Backstage Protocol v.4.0</div>
        </div>

        <p className="warning-text">
          Unauthorized access to the analog core is strictly logged.
        </p>
      </main>
    </div>
  );
}

export default AdminLogin;
