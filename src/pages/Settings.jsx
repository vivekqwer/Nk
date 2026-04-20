import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/settings.css';

function Settings() {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <div className="settings-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">Harmony</Link>
            <div className="nav-links">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/community">Community</Link>
              <Link to="/settings" className="active">Settings</Link>
            </div>
          </div>
          <div className="nav-right">
            <MobileNav />
            <div className="search-icon">🔍</div>
            <div className="notifications">🔔</div>
            <div className="avatar">A</div>
          </div>
        </div>
      </nav>

      <div className="settings-container">
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your account preferences and privacy settings</p>
        </div>

        <div className="settings-layout">
          {/* Sidebar */}
          <aside className="settings-sidebar">
            <div className="sidebar-nav">
              <button 
                className={activeTab === 'account' ? 'active' : ''} 
                onClick={() => setActiveTab('account')}
              >
                Account
              </button>
              <button 
                className={activeTab === 'security' ? 'active' : ''} 
                onClick={() => setActiveTab('security')}
              >
                Security
              </button>
              <button 
                className={activeTab === 'notifications' ? 'active' : ''} 
                onClick={() => setActiveTab('notifications')}
              >
                Notifications
              </button>
              <button 
                className={activeTab === 'billing' ? 'active' : ''} 
                onClick={() => setActiveTab('billing')}
              >
                Billing
              </button>
              <button 
                className={activeTab === 'privacy' ? 'active' : ''} 
                onClick={() => setActiveTab('privacy')}
              >
                Privacy
              </button>
            </div>
          </aside>

          {/* Content */}
          <main className="settings-content">
            {activeTab === 'account' && (
              <div className="settings-section">
                <h2>Account Settings</h2>
                
                <div className="form-section">
                  <h3>Personal Information</h3>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" defaultValue="Alex Johnson" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" defaultValue="alex@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <button className="primary-button">Save Changes</button>
                </div>

                <div className="form-section">
                  <h3>Learning Preferences</h3>
                  <div className="form-group">
                    <label>Primary Instrument</label>
                    <select defaultValue="guitar">
                      <option value="guitar">Guitar</option>
                      <option value="piano">Piano</option>
                      <option value="drums">Drums</option>
                      <option value="violin">Violin</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Skill Level</label>
                    <select defaultValue="intermediate">
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <button className="primary-button">Save Changes</button>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="settings-section">
                <h2>Security Settings</h2>
                
                <div className="form-section">
                  <h3>Change Password</h3>
                  <div className="form-group">
                    <label>Current Password</label>
                    <input type="password" />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input type="password" />
                  </div>
                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input type="password" />
                  </div>
                  <button className="primary-button">Update Password</button>
                </div>

                <div className="form-section">
                  <h3>Two-Factor Authentication</h3>
                  <div className="setting-item">
                    <div className="setting-info">
                      <h4>Enable 2FA</h4>
                      <p>Add an extra layer of security to your account</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="settings-section">
                <h2>Notification Settings</h2>
                
                <div className="form-section">
                  <h3>Email Notifications</h3>
                  <div className="setting-item">
                    <div className="setting-info">
                      <h4>Course Updates</h4>
                      <p>Get notified when new lessons are added</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-info">
                      <h4>Progress Reminders</h4>
                      <p>Weekly reminders to continue learning</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-info">
                      <h4>Promotional Emails</h4>
                      <p>Special offers and new course announcements</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Push Notifications</h3>
                  <div className="setting-item">
                    <div className="setting-info">
                      <h4>Live Session Alerts</h4>
                      <p>Get notified before live sessions start</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="settings-section">
                <h2>Billing Settings</h2>
                
                <div className="form-section">
                  <h3>Current Plan</h3>
                  <div className="plan-info">
                    <div className="plan-details">
                      <h4>Pro Plan</h4>
                      <p>₹499/month • Renews on May 20, 2026</p>
                    </div>
                    <Link to="/subscription" className="ghost-button">Change Plan</Link>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Payment Method</h3>
                  <div className="payment-method">
                    <span>💳 Visa ending in 4242</span>
                    <button className="ghost-button">Update</button>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Billing History</h3>
                  <Link to="/orders" className="ghost-button">View All Orders →</Link>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="settings-section">
                <h2>Privacy Settings</h2>
                
                <div className="form-section">
                  <h3>Profile Visibility</h3>
                  <div className="form-group">
                    <label>Profile Status</label>
                    <select defaultValue="public">
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Data & Privacy</h3>
                  <button className="ghost-button">Download My Data</button>
                  <button className="ghost-button danger">Delete Account</button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Settings;
