import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/onboarding.css';

function OnboardingInstruments() {
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const navigate = useNavigate();

  const instruments = ['Guitar', 'Piano', 'Drums', 'Bass', 'Vocals', 'Violin', 'Synth', 'DJ/Production', 'Ukulele', 'Saxophone', 'Other'];

  const toggleInstrument = (instrument) => {
    if (selectedInstruments.includes(instrument)) {
      setSelectedInstruments(selectedInstruments.filter(i => i !== instrument));
    } else {
      setSelectedInstruments([...selectedInstruments, instrument]);
    }
  };

  const handleContinue = () => {
    console.log('Selected instruments:', selectedInstruments);
    // TODO: Save to API
    navigate('/onboarding-skills');
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  return (
    <div className="onboarding-page">
      <div className="onboarding-container">
        <div className="onboarding-header">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '66%' }}></div>
          </div>
          <button onClick={handleSkip} className="skip-btn">Skip for now</button>
        </div>

        <div className="onboarding-content">
          <h1>What do you play (or want to play)?</h1>
          <p>Select your instruments.</p>

          <div className="genre-grid">
            {instruments.map((instrument) => (
              <div
                key={instrument}
                className={`genre-card ${selectedInstruments.includes(instrument) ? 'selected' : ''}`}
                onClick={() => toggleInstrument(instrument)}
              >
                <div className="genre-icon">{instrument[0]}</div>
                <div className="genre-name">{instrument}</div>
                {selectedInstruments.includes(instrument) && <div className="check-mark">✓</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="onboarding-footer">
          <button
            onClick={handleContinue}
            className="primary-button"
            disabled={selectedInstruments.length === 0}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnboardingInstruments;
