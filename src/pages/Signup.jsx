import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement signup API call
    console.log('Signup:', { fullName, email, password });
    navigate('/verify-email');
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
                <span>Already a member? </span>
                <Link to="/login">Log in</Link>
              </div>
            </div>
            <h2>Create your account</h2>
            <p>Start your 7-day free trial. No credit card needed.</p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="social-auth">
                <button type="button" className="social-btn google">
                  Continue with Google
                </button>
                <button type="button" className="social-btn apple">
                  Continue with Apple
                </button>
              </div>

              <div className="divider">
                <span>or sign up with email</span>
              </div>

              <div className="form-group">
                <label>Full name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
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
                <p className="helper-text">At least 8 characters, 1 number, 1 symbol.</p>
              </div>

              <div className="form-group">
                <label className="checkbox">
                  <input type="checkbox" required />
                  <span>I agree to Harmony's <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a></span>
                </label>
              </div>

              <button type="submit" className="primary-button full-width">
                Create account →
              </button>

              <p className="trial-note">
                By signing up you'll start with a 7-day free trial, then ₹499/month. Cancel anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
