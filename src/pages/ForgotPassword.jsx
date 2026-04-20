import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // 1 = request reset, 2 = set new password
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRequestReset = async (e) => {
    e.preventDefault();
    // TODO: Implement forgot password API call
    console.log('Request reset for:', email);
    setMessage('Password reset link sent to your email');
    setTimeout(() => {
      setStep(2);
    }, 2000);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    // TODO: Implement reset password API call
    console.log('Reset password');
    setMessage('Password updated successfully');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Brand Pane */}
        <div className="brand-pane">
          <div className="brand-content">
            <div className="brand-logo">Harmony</div>
            <h1>Reset your password</h1>
            <p>Get back to making music in no time.</p>
          </div>
        </div>

        {/* Form Pane */}
        <div className="form-pane">
          <div className="form-content">
            <div className="form-header">
              <Link to="/login" className="back-link">← Back to login</Link>
            </div>

            {step === 1 ? (
              <>
                <h2>Reset your password</h2>
                <p>Enter the email tied to your account and we'll send you a secure reset link.</p>

                <form onSubmit={handleRequestReset} className="auth-form">
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

                  <button type="submit" className="primary-button full-width">
                    Send reset link
                  </button>

                  {message && <p className="helper-text text-center">{message}</p>}

                  <p className="trial-note">
                    Didn't receive it? Check spam or contact support.
                  </p>
                </form>
              </>
            ) : (
              <>
                <h2>Create a new password</h2>
                <p>Choose a strong password you haven't used before.</p>

                <form onSubmit={handleResetPassword} className="auth-form">
                  <div className="form-group">
                    <label>New password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                    <p className="helper-text">At least 8 characters, 1 number, 1 symbol.</p>
                  </div>

                  <div className="form-group">
                    <label>Confirm password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <button type="submit" className="primary-button full-width">
                    Update password
                  </button>

                  {message && <p className="helper-text text-center">{message}</p>}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
