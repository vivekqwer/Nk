import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/onboarding.css';

function OnboardingGenres() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();

  const genres = ['Rock', 'Pop', 'Jazz', 'Classical', 'Electronic', 'Hip-Hop', 'R&B', 'Indie', 'Folk', 'Metal', 'Country', 'Latin'];

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleContinue = () => {
    console.log('Selected genres:', selectedGenres);
    // TODO: Save to API
    navigate('/onboarding-instruments');
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  return (
    <div className="onboarding-page">
      <div className="onboarding-container">
        <div className="onboarding-header">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '33%' }}></div>
          </div>
          <button onClick={handleSkip} className="skip-btn">Skip for now</button>
        </div>

        <div className="onboarding-content">
          <h1>What moves you?</h1>
          <p>Pick all that apply — we'll tailor your feed.</p>

          <div className="genre-grid">
            {genres.map((genre) => (
              <div
                key={genre}
                className={`genre-card ${selectedGenres.includes(genre) ? 'selected' : ''}`}
                onClick={() => toggleGenre(genre)}
              >
                <div className="genre-icon">{genre[0]}</div>
                <div className="genre-name">{genre}</div>
                {selectedGenres.includes(genre) && <div className="check-mark">✓</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="onboarding-footer">
          <button
            onClick={handleContinue}
            className="primary-button"
            disabled={selectedGenres.length === 0}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnboardingGenres;
