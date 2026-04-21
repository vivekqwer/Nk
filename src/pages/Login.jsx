import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="login-page">
      {/* Left Pane: Brand Canvas */}
      <section className="brand-pane">
        {/* Decorative Grain/Texture Overlay */}
        <div className="texture-overlay"></div>

        <div className="brand-content">
          {/* Brand Anchor */}
          <div className="brand-anchor">
            <span className="material-symbols-outlined filled">album</span>
            <span className="brand-name">Harmony</span>
          </div>

          {/* Headline Cluster */}
          <div className="headline-cluster">
            <h1>
              Your front-row seat to <span className="highlight">music mastery</span> starts here.
            </h1>
            <p>
              Join 50,000+ artists, producers, and theory nerds in the most visceral learning experience ever built for the analog soul.
            </p>
          </div>

          {/* Floating Testimonial Card */}
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-avatar"></div>
              <div className="testimonial-text">
                <div className="stars">
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                </div>
                <p className="quote">"The tactile feel of this platform changed how I visualize synthesis. It's like playing a Moog for your brain."</p>
                <p className="author mono">— Sarah V., Sound Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background Aesthetic Image */}
        <div className="background-image"></div>
      </section>

      {/* Right Pane: Login Form */}
      <section className="form-pane">
        <div className="form-content">
          {/* Signup Link */}
          <div className="signup-link">
            <p>
              New here?
              <Link to="/signup">Create account</Link>
            </p>
          </div>

          {/* Form Header */}
          <div className="form-header">
            <h2>Welcome back.</h2>
            <p>Log in to continue your journey.</p>
          </div>

          {/* Social Auth */}
          <div className="social-auth">
            <button type="button" className="social-btn google" onClick={handleGoogleLogin}>
              <img src="https://www.google.com/favicon.ico" alt="Google" className="google-icon" />
              <span className="mono">Google</span>
            </button>
            <button type="button" className="social-btn apple">
              <span className="material-symbols-outlined filled">apple</span>
              <span className="mono">Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="divider">
            <div className="line"></div>
            <span className="mono">Or via email</span>
            <div className="line"></div>
          </div>

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="claudio@harmony.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Form Options */}
            <div className="form-options">
              <label className="remember-checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>

            <button type="submit" className="submit-btn">
              Log in
            </button>

            {/* Security Note */}
            <div className="security-note">
              <span className="material-symbols-outlined">lock</span>
              <span>Protected by end-to-end encryption</span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
