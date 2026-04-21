import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/course-creation-wizard.css';

function CourseCreationWizard() {
  return (
    <div className="course-creation-wizard">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>The Master</h1>
          <p>Admin Console</p>
        </div>
        <nav className="sidebar-nav">
          <a href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a href="#" className="active">
            <span className="material-symbols-outlined">library_music</span>
            Course Catalog
          </a>
          <a href="#">
            <span className="material-symbols-outlined">group</span>
            Student Roster
          </a>
          <a href="#">
            <span className="material-symbols-outlined">payments</span>
            Sales Analytics
          </a>
          <a href="#">
            <span className="material-symbols-outlined">tune</span>
            Studio Settings
          </a>
        </nav>
        <div className="sidebar-footer">
          <a href="#">
            <span className="material-symbols-outlined">help</span>
            Help Center
          </a>
          <a href="#">
            <span className="material-symbols-outlined">logout</span>
            Log Out
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Sticky Top Bar */}
        <header className="top-bar">
          <div className="top-bar-left">
            <button className="back-btn">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="title-group">
              <h2>Create course</h2>
              <span className="draft-badge">Draft</span>
            </div>
          </div>
          <div className="top-bar-right">
            <button className="btn-secondary">Preview</button>
            <button className="btn-ghost">Save draft</button>
            <button className="btn-primary">Publish</button>
          </div>
        </header>

        <div className="content-wrapper">
          {/* Left Sticky Section Nav */}
          <aside className="section-nav">
            <nav className="sticky-nav">
              <div className="nav-line">
                <a href="#basics" className="active">
                  <div className="dot active"></div>
                  <span>Basics</span>
                </a>
                <a href="#media">
                  <div className="dot"></div>
                  <span>Media</span>
                </a>
                <a href="#curriculum">
                  <div className="dot"></div>
                  <span>Curriculum</span>
                </a>
                <a href="#pricing">
                  <div className="dot"></div>
                  <span>Pricing & access</span>
                </a>
                <a href="#seo">
                  <div className="dot"></div>
                  <span>SEO</span>
                </a>
                <a href="#settings">
                  <div className="dot"></div>
                  <span>Settings</span>
                </a>
              </div>
            </nav>
          </aside>

          {/* Main Form Panels */}
          <div className="form-panels">
            {/* SECTION 1: BASICS */}
            <section className="panel-section" id="basics">
              <header>
                <h3>Basics</h3>
                <p>Define the soul of your masterclass.</p>
              </header>
              <div className="form-group">
                <label>Masterclass Title</label>
                <input type="text" placeholder="e.g. The Architecture of Analog Synthesis" />
              </div>
              <div className="form-group">
                <label>Subtitle</label>
                <input type="text" placeholder="A deep dive into voltage-controlled oscillators and modular signal paths." />
              </div>
              <div className="form-group">
                <label>Description</label>
                <div className="rich-editor">
                  <div className="editor-toolbar">
                    <button className="toolbar-btn"><span className="material-symbols-outlined">format_bold</span></button>
                    <button className="toolbar-btn"><span className="material-symbols-outlined">format_italic</span></button>
                    <button className="toolbar-btn"><span className="material-symbols-outlined">format_list_bulleted</span></button>
                    <button className="toolbar-btn"><span className="material-symbols-outlined">link</span></button>
                  </div>
                  <textarea placeholder="Tell your students what they will achieve..." rows="6"></textarea>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <label>Genre & Style</label>
                  <div className="tags-container">
                    <span className="tag active">Electronic</span>
                    <span className="tag">Jazz Fusion</span>
                    <span className="tag">Techno</span>
                    <button className="add-tag-btn">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
                <div className="form-group half">
                  <label>Experience Level</label>
                  <select defaultValue="intermediate">
                    <option>Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
            </section>

            {/* SECTION 2: MEDIA */}
            <section className="panel-section" id="media">
              <header>
                <h3>Media</h3>
                <p>Visual rhythm for your course storefront.</p>
              </header>
              <div className="media-grid">
                <div className="media-upload large">
                  <label>Cover Image (16:9)</label>
                  <div className="upload-area">
                    <span className="material-symbols-outlined">cloud_upload</span>
                    <p>Click to upload cover art</p>
                    <p className="hint">Recommended: 1920x1080px (JPEG/PNG)</p>
                  </div>
                </div>
                <div className="media-upload small">
                  <div className="form-group">
                    <label>Trailer Video URL</label>
                    <div className="url-input">
                      <span className="material-symbols-outlined">link</span>
                      <input type="text" placeholder="https://vimeo.com/..." />
                    </div>
                  </div>
                  <div className="video-preview">
                    <div className="play-btn">
                      <span className="material-symbols-outlined filled">play_arrow</span>
                    </div>
                    <span className="duration">01:45</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: CURRICULUM */}
            <section className="panel-section" id="curriculum">
              <header>
                <div className="header-left">
                  <h3>Curriculum</h3>
                  <p>The arrangement of your lessons.</p>
                </div>
                <button className="add-module-btn">
                  <span className="material-symbols-outlined">add_circle</span>
                  Add Module
                </button>
              </header>
              <div className="modules-container">
                {/* Module 1 */}
                <div className="module-card">
                  <div className="module-header">
                    <div className="module-title">
                      <span className="material-symbols-outlined drag-handle">drag_indicator</span>
                      <h4>Module 1: Signal Fundamentals</h4>
                    </div>
                    <div className="module-actions">
                      <button className="action-btn">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="action-btn delete">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="lessons-list">
                    <div className="lesson-item">
                      <div className="lesson-info">
                        <span className="material-symbols-outlined filled">play_circle</span>
                        <div>
                          <p>The Anatomy of a Sine Wave</p>
                          <span className="mono">Video • 12:40</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined drag-handle">drag_handle</span>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-info">
                        <span className="material-symbols-outlined filled">play_circle</span>
                        <div>
                          <p>Understanding Frequency & Amplitude</p>
                          <span className="mono">Video • 15:30</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined drag-handle">drag_handle</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CourseCreationWizard;
