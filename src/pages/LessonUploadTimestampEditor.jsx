import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/lesson-upload-timestamp-editor.css';

function LessonUploadTimestampEditor() {
  return (
    <div className="lesson-editor-page">
      {/* SideNavBar */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <h1>The Analog Master</h1>
        </div>
        <div className="sidebar-nav">
          <a href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a href="#" className="active">
            <span className="material-symbols-outlined">library_music</span>
            Lesson Library
          </a>
          <a href="#">
            <span className="material-symbols-outlined">folder_shared</span>
            Resource Manager
          </a>
          <a href="#">
            <span className="material-symbols-outlined">monitoring</span>
            Analytics
          </a>
          <a href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </div>
        <div className="sidebar-footer">
          <button className="new-lesson-btn">New Lesson</button>
          <div className="admin-profile">
            <div className="avatar"></div>
            <div>
              <p>Studio Admin v1.0</p>
              <span>Admin User Profile</span>
            </div>
          </div>
        </div>
      </nav>

      {/* TopAppBar */}
      <header className="top-bar">
        <div className="page-title">Studio Editor</div>
        <div className="top-bar-right">
          <div className="search-bar">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search resources..." />
          </div>
          <div className="icon-actions">
            <button><span className="material-symbols-outlined">notifications</span></button>
            <button><span className="material-symbols-outlined">help_outline</span></button>
            <button><span className="material-symbols-outlined">account_circle</span></button>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="main-content">
        <div className="content-grid">
          {/* Video Uploader Area */}
          <div className="video-section">
            {/* Player Surface */}
            <div className="player-surface">
              <div className="video-container">
                <div className="video-preview"></div>
                {/* Playback Overlay UI */}
                <div className="playback-overlay">
                  <button className="play-btn">
                    <span className="material-symbols-outlined filled">play_arrow</span>
                  </button>
                </div>
                <div className="video-controls">
                  <div className="time-display mono">00:02:45 / 00:15:30</div>
                  <div className="control-buttons">
                    <button><span className="material-symbols-outlined">settings</span></button>
                    <button><span className="material-symbols-outlined">fullscreen</span></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Timeline */}
            <div className="timeline-section">
              <div className="timeline-header">
                <span className="timeline-title">Timeline Master</span>
                <span className="timeline-time mono">00:02:45:12</span>
              </div>
              <div className="timeline-track">
                {/* Chapter Bands */}
                <div className="chapter-bands">
                  <div className="chapter-band intro">
                    <span>Intro</span>
                  </div>
                  <div className="chapter-band hook">
                    <span>The Hook</span>
                  </div>
                  <div className="chapter-band verse">
                    <span>Verse 1 Breakdown</span>
                  </div>
                  <div className="chapter-band improv">
                    <span>Improvisation Tips</span>
                  </div>
                </div>
                {/* Progress Scrubber */}
                <div className="scrubber">
                  <div className="scrubber-head"></div>
                </div>
                {/* Waveform Mockup */}
                <div className="waveform">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="wave-bar" style={{ height: `${Math.random() * 40 + 20}px` }}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Tab Area */}
            <div className="resources-section">
              <div className="tab-nav">
                <button className="tab-btn active">Resources</button>
                <button className="tab-btn">Transcript</button>
                <button className="tab-btn">Quiz</button>
              </div>
              <div className="resources-grid">
                {[
                  { type: 'PDF', name: 'Lesson Notes.pdf', size: '2.4 MB' },
                  { type: 'PDF', name: 'Practice Exercises.pdf', size: '1.8 MB' },
                  { type: 'AUDIO', name: 'Backing Track.mp3', size: '15.2 MB' },
                  { type: 'LINK', name: 'Reference Guide', size: 'External' }
                ].map((resource, index) => (
                  <div key={index} className="resource-card">
                    <div className="resource-icon">
                      <span className="material-symbols-outlined">
                        {resource.type === 'PDF' ? 'picture_as_pdf' : resource.type === 'AUDIO' ? 'audio_file' : 'link'}
                      </span>
                    </div>
                    <div className="resource-info">
                      <p>{resource.name}</p>
                      <span className="mono">{resource.size}</span>
                    </div>
                    <button className="download-btn">
                      <span className="material-symbols-outlined">download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Lesson Details */}
          <div className="details-panel">
            <div className="panel-section">
              <h3>Lesson Details</h3>
              <div className="form-group">
                <label>Lesson Title</label>
                <input type="text" defaultValue="The Anatomy of a Sine Wave" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea rows="4" defaultValue="A comprehensive breakdown of sine wave properties and their applications in analog synthesis."></textarea>
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input type="text" defaultValue="15:30" className="mono" />
              </div>
              <div className="form-group">
                <label>Difficulty Level</label>
                <select defaultValue="intermediate">
                  <option>Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>

            <div className="panel-section">
              <h3>Timestamps</h3>
              <div className="timestamps-list">
                {[
                  { time: '00:00', title: 'Introduction' },
                  { time: '02:15', title: 'Wave Properties' },
                  { time: '05:30', title: 'Frequency Control' },
                  { time: '08:45', title: 'Amplitude Modulation' },
                  { time: '12:00', title: 'Practical Examples' }
                ].map((timestamp, index) => (
                  <div key={index} className="timestamp-item">
                    <span className="mono time">{timestamp.time}</span>
                    <input type="text" defaultValue={timestamp.title} />
                    <button className="remove-btn">
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>
                ))}
              </div>
              <button className="add-timestamp-btn">
                <span className="material-symbols-outlined">add</span>
                Add Timestamp
              </button>
            </div>

            <div className="panel-section">
              <h3>Publishing</h3>
              <div className="publish-options">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  <span>Make lesson available immediately</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Send notification to enrolled students</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Require completion before next lesson</span>
                </label>
              </div>
              <div className="publish-actions">
                <button className="btn-secondary">Save Draft</button>
                <button className="btn-primary">Publish Lesson</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LessonUploadTimestampEditor;
