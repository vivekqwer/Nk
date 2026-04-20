import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/onboarding.css';

function OnboardingSkills() {
  const [skillLevel, setSkillLevel] = useState('');
  const [goals, setGoals] = useState([]);
  const navigate = useNavigate();

  const skillLevels = ['Complete Beginner', 'Hobbyist', 'Intermediate', 'Advanced', 'Pro'];
  const goalOptions = ['Write songs', 'Perform live', 'Produce tracks', 'Pass a grade', 'Jam with friends', 'Go pro', 'Just for fun'];

  const toggleGoal = (goal) => {
    if (goals.includes(goal)) {
      setGoals(goals.filter(g => g !== goal));
    } else {
      setGoals([...goals, goal]);
    }
  };

  const handleFinish = () => {
    console.log('Skill level:', skillLevel, 'Goals:', goals);
    // TODO: Save to API
    navigate('/dashboard');
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  return (
    <div className="onboarding-page">
      <div className="onboarding-container">
        <div className="onboarding-header">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '100%' }}></div>
          </div>
          <button onClick={handleSkip} className="skip-btn">Skip for now</button>
        </div>

        <div className="onboarding-content">
          <h1>Where are you on your journey?</h1>
          <p>Select your skill level and goals.</p>

          <div className="skill-levels">
            {skillLevels.map((level) => (
              <div
                key={level}
                className={`skill-card ${skillLevel === level ? 'selected' : ''}`}
                onClick={() => setSkillLevel(level)}
              >
                <div className="skill-icon">{level[0]}</div>
                <div className="skill-name">{level}</div>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: '40px', marginBottom: '16px' }}>What's your goal?</h2>
          <div className="goals-grid">
            {goalOptions.map((goal) => (
              <div
                key={goal}
                className={`goal-chip ${goals.includes(goal) ? 'selected' : ''}`}
                onClick={() => toggleGoal(goal)}
              >
                {goal}
              </div>
            ))}
          </div>
        </div>

        <div className="onboarding-footer">
          <button
            onClick={handleFinish}
            className="primary-button"
            disabled={!skillLevel}
          >
            Finish setup →
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnboardingSkills;
