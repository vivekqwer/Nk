import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';
import '../styles/verification.css';

function EmailVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(0, 1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    // TODO: Implement resend OTP API call
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    console.log('OTP:', otpValue);
    // TODO: Implement OTP verification API call
    navigate('/onboarding');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Brand Pane */}
        <div className="brand-pane">
          <div className="brand-content">
            <div className="brand-logo">Harmony</div>
            <h1>Verify your email</h1>
            <p>One step closer to your music journey.</p>
          </div>
        </div>

        {/* Form Pane */}
        <div className="form-pane">
          <div className="form-content">
            <div className="form-header">
              <div className="verification-icon">✉️</div>
            </div>

            <h2>Verify your email</h2>
            <p>We sent a 6-digit code to your@email.com. Enter it below to continue.</p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="otp-input"
                  />
                ))}
              </div>

              <div className="resend-section">
                {timeLeft > 0 ? (
                  <p>Didn't get it? Resend in {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
                ) : (
                  <button type="button" onClick={handleResend} className="ghost-button">
                    Resend code
                  </button>
                )}
              </div>

              <p className="trial-note">
                Wrong email? <a href="#change">Change email</a>
              </p>

              <button type="submit" className="primary-button full-width">
                Verify →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
