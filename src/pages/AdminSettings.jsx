import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/admin-settings.css';

function AdminSettings() {
  return (
    <div className="admin-settings-page">
      {/* TopAppBar */}
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <span className="logo">Harmony LMS</span>
            <nav className="nav-links">
              <a href="#">Dashboard</a>
              <a href="#">Course Store</a>
              <a href="#" className="active">Admin Settings</a>
            </nav>
          </div>
          <div className="navbar-right">
            <div className="search-bar">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="Search configs..." />
            </div>
            <button className="icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="icon-btn">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      <div className="page-layout">
        {/* SideNavBar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="brand-section">
              <div className="avatar"></div>
              <div>
                <p>The Analog Master</p>
                <p className="mono">Backstage Pass: Pro</p>
              </div>
            </div>
          </div>
          <nav className="sidebar-nav">
            <a href="#">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </a>
            <a href="#">
              <span className="material-symbols-outlined">storefront</span>
              Course Store
            </a>
            <a href="#">
              <span className="material-symbols-outlined">workspace_premium</span>
              Certificates
            </a>
            <a href="#" className="active">
              <span className="material-symbols-outlined">settings_applications</span>
              Admin Settings
            </a>
            <a href="#">
              <span className="material-symbols-outlined">contact_support</span>
              Help Support
            </a>
          </nav>
          <div className="sidebar-footer">
            <button className="launch-btn">
              <span className="material-symbols-outlined">bolt</span>
              Launch Studio
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <header className="page-header">
            <h1>Site Configuration</h1>
            <p className="subtitle">Manage platform-wide settings and preferences.</p>
          </header>

          <div className="settings-container">
            {/* General Settings */}
            <section className="settings-section">
              <div className="section-header">
                <h2>General Settings</h2>
                <p className="mono">Basic platform configuration</p>
              </div>
              <div className="settings-grid">
                <div className="setting-item">
                  <label className="mono">Site Name</label>
                  <input type="text" defaultValue="Harmony LMS" />
                </div>
                <div className="setting-item">
                  <label className="mono">Site URL</label>
                  <input type="text" defaultValue="https://harmonylms.com" />
                </div>
                <div className="setting-item full-width">
                  <label className="mono">Site Description</label>
                  <textarea defaultValue="The Analog Master Design System. Built for the rhythm of digital learning."></textarea>
                </div>
                <div className="setting-item">
                  <label className="mono">Timezone</label>
                  <select defaultValue="UTC">
                    <option>UTC</option>
                    <option>America/New_York</option>
                    <option>Europe/London</option>
                    <option>Asia/Kolkata</option>
                  </select>
                </div>
                <div className="setting-item">
                  <label className="mono">Language</label>
                  <select defaultValue="en">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Payment Settings */}
            <section className="settings-section">
              <div className="section-header">
                <h2>Payment Configuration</h2>
                <p className="mono">Stripe and payment gateway settings</p>
              </div>
              <div className="settings-grid">
                <div className="setting-item full-width">
                  <label className="mono">Stripe Public Key</label>
                  <input type="text" defaultValue="pk_live_..." />
                </div>
                <div className="setting-item full-width">
                  <label className="mono">Stripe Secret Key</label>
                  <input type="password" defaultValue="sk_live_..." />
                </div>
                <div className="setting-item">
                  <label className="mono">Currency</label>
                  <select defaultValue="USD">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>INR</option>
                  </select>
                </div>
                <div className="setting-item">
                  <label className="mono">Tax Rate (%)</label>
                  <input type="number" defaultValue="18" />
                </div>
              </div>
            </section>

            {/* Email Settings */}
            <section className="settings-section">
              <div className="section-header">
                <h2>Email Configuration</h2>
                <p className="mono">SMTP and notification settings</p>
              </div>
              <div className="settings-grid">
                <div className="setting-item">
                  <label className="mono">SMTP Host</label>
                  <input type="text" defaultValue="smtp.gmail.com" />
                </div>
                <div className="setting-item">
                  <label className="mono">SMTP Port</label>
                  <input type="number" defaultValue="587" />
                </div>
                <div className="setting-item">
                  <label className="mono">SMTP Username</label>
                  <input type="text" defaultValue="noreply@harmonylms.com" />
                </div>
                <div className="setting-item">
                  <label className="mono">SMTP Password</label>
                  <input type="password" defaultValue="••••••••" />
                </div>
                <div className="setting-item full-width">
                  <label className="mono">From Email</label>
                  <input type="text" defaultValue="noreply@harmonylms.com" />
                </div>
                <div className="setting-item full-width">
                  <label className="mono">From Name</label>
                  <input type="text" defaultValue="Harmony LMS" />
                </div>
              </div>
            </section>

            {/* Security Settings */}
            <section className="settings-section">
              <div className="section-header">
                <h2>Security Settings</h2>
                <p className="mono">Authentication and security preferences</p>
              </div>
              <div className="settings-grid">
                <div className="setting-item full-width">
                  <div className="toggle-row">
                    <div>
                      <label className="mono">Two-Factor Authentication</label>
                      <p className="text-muted">Require 2FA for all admin accounts</p>
                    </div>
                    <button className="toggle-btn active"></button>
                  </div>
                </div>
                <div className="setting-item full-width">
                  <div className="toggle-row">
                    <div>
                      <label className="mono">Session Timeout</label>
                      <p className="text-muted">Auto-logout after inactivity</p>
                    </div>
                    <select defaultValue="30">
                      <option>15 minutes</option>
                      <option>30 minutes</option>
                      <option>1 hour</option>
                      <option>Never</option>
                    </select>
                  </div>
                </div>
                <div className="setting-item full-width">
                  <div className="toggle-row">
                    <div>
                      <label className="mono">IP Whitelist</label>
                      <p className="text-muted">Restrict admin access to specific IPs</p>
                    </div>
                    <button className="toggle-btn"></button>
                  </div>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="settings-actions">
              <button className="btn-secondary">Reset to Defaults</button>
              <button className="btn-primary">Save Changes</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminSettings;
