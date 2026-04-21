import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/public-certificate-verification.css';

function PublicCertificateVerification() {
  return (
    <div className="certificate-verification-page">
      <header className="page-header">
        <div className="brand">
          <span className="brand-name">Harmony LMS</span>
        </div>
      </header>
      <main className="main-content">
        <div className="verification-card">
          {/* Background Accent Shape */}
          <div className="accent-shape accent-1"></div>
          <div className="accent-shape accent-2"></div>
          
          <div className="card-content">
            {/* Left Column: Visual Confirmation */}
            <div className="visual-column">
              <div className="success-icon">
                <span className="material-symbols-outlined filled">verified</span>
              </div>
              <h2>Verification Successful</h2>
              <p>
                This digital record confirms that the credentials presented are authentic and issued by Harmony LMS.
              </p>
            </div>

            {/* Right Column: Certificate Details */}
            <div className="details-column">
              <div className="details-header">
                <span className="mono label">Official Verification</span>
                <h1>Certificate of Excellence</h1>
                <div className="divider-line"></div>
              </div>

              <div className="certificate-details">
                <div className="detail-item">
                  <p className="mono label">Student</p>
                  <p className="value">Julianne V. Sterling</p>
                </div>
                <div className="detail-grid">
                  <div className="detail-item">
                    <p className="mono label">Course</p>
                    <p className="value">Analog Synthesis & Signal Flow</p>
                  </div>
                  <div className="detail-item">
                    <p className="mono label">Issued Date</p>
                    <p className="value">Oct 24, 2024</p>
                  </div>
                </div>
                <div className="detail-footer">
                  <div className="detail-item">
                    <p className="mono label">Certificate ID</p>
                    <p className="mono value primary">HLMS-8821-XP09</p>
                  </div>
                  <div className="action-buttons">
                    <button className="btn-secondary">
                      <span className="material-symbols-outlined">download</span>
                      Download
                    </button>
                    <button className="btn-primary">
                      <span className="material-symbols-outlined">share</span>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/">Return to Harmony LMS</Link>
          <a href="#">Report Issue</a>
          <a href="#">Contact Support</a>
        </div>
      </main>
    </div>
  );
}

export default PublicCertificateVerification;
