import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/courses', label: 'Courses' },
    { path: '/community', label: 'Community' },
    { path: '/subscription', label: 'Pricing' },
  ];

  return (
    <>
      <button className="mobile-menu-btn" onClick={() => setIsOpen(true)}>
        ☰
      </button>

      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="logo">Harmony</span>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>
            <nav className="mobile-nav-links">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mobile-menu-footer">
              <Link to="/profile">Profile</Link>
              <Link to="/login">Log Out</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNav;
