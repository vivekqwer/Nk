import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement login API call
    console.log('Login:', { email, password });
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    // Redirect to backend Google OAuth endpoint
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Brand Pane */}
        <div className="brand-pane">
          <div className="brand-content">
            <div className="brand-logo">Harmony</div>
            <h1>Your front-row seat to music mastery starts here.</h1>
            <p>Join 50,000+ musicians learning from Grammy-winning artists.</p>
            <div className="testimonial">
              <p>"This platform transformed my playing. The instructors are world-class."</p>
              <div className="testimonial-author">
                <div className="avatar">R</div>
                <div className="author-info">
                  <div className="name">Rahul Sharma</div>
                  <div className="instrument">Guitarist</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Pane */}
        <div className="form-pane">
          <div className="form-content">
            <div className="form-header">
              <Link to="/" className="back-link">← Back</Link>
              <div className="auth-toggle">
                <span>New here? </span>
                <Link to="/signup">Create account</Link>
              </div>
            </div>
            <h2>Welcome back.</h2>
            <p>Log in to continue your journey.</p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="social-auth">
                <button type="button" className="social-btn google" onClick={handleGoogleLogin}>
                  Continue with Google
                </button>
                <button type="button" className="social-btn apple">
                  Continue with Apple
                </button>
              </div>

              <div className="divider">
                <span>or log in with email</span>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="form-options">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
              </div>

              <button type="submit" className="primary-button full-width">
                Log in →
              </button>

              <div className="security-note">
                🔒 Protected by end-to-end encryption
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
