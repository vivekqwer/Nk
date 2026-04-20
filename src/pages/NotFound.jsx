import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notfound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div className="cta-row">
          <Link to="/" className="primary-button">Go to Homepage</Link>
          <Link to="/courses" className="ghost-button">Browse Courses</Link>
        </div>
        <div className="help-text">
          <p>Need help? <Link to="/support">Contact Support</Link></p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
