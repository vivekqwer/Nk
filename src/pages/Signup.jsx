import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('weak');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement signup API call
    console.log('Signup:', { fullName, email, password });
    navigate('/verify-email');
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Simple password strength calculation
    if (value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value)) {
      setPasswordStrength('strong');
    } else if (value.length >= 6) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('weak');
    }
  };

  return (
    <div className="signup-page">
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
                </div>
                <p className="quote">"The tactile feel of this platform changed how I visualize synthesis. It's like playing a Moog for your brain."</p>
                <p className="author mono">— Sarah V., Sound Designer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="background-image"></div>
      </section>

      {/* Right Pane: Signup Form */}
      <section className="form-pane">
        <div className="form-content">
          {/* Login Link */}
          <div className="login-link">
            <p>
              Already a member?
              <Link to="/login">Log in</Link>
            </p>
          </div>

          {/* Form Header */}
          <div className="form-header">
            <h2>Create your account</h2>
            <p>Join the front row of music education.</p>
          </div>

          {/* Social Auth */}
          <div className="social-auth">
            <button type="button" className="social-btn google">
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
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Claude Debussy"
                  required
                />
              </div>

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
                    onChange={handlePasswordChange}
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
                {/* Strength Meter */}
                <div className="strength-meter">
                  <div className={`strength-bar ${passwordStrength === 'weak' ? 'filled' : ''}`}></div>
                  <div className={`strength-bar ${passwordStrength === 'medium' || passwordStrength === 'strong' ? 'filled' : ''}`}></div>
                  <div className={`strength-bar ${passwordStrength === 'strong' ? 'filled' : ''}`}></div>
                  <div className={`strength-bar ${passwordStrength === 'strong' ? 'filled' : ''}`}></div>
                  <span className={`strength-label mono ${passwordStrength}`}>{passwordStrength}</span>
                </div>
              </div>
            </div>

            {/* Terms */}
            <label className="terms-checkbox">
              <input type="checkbox" required />
              <span>
                I agree to Harmony's <Link to="#terms">Terms</Link> and <Link to="#privacy">Privacy Policy</Link>
              </span>
            </label>

            <button type="submit" className="submit-btn">
              Create account
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signup;
