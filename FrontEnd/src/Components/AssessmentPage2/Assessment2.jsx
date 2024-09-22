import React, { useState } from 'react';
import './Assessment2.css'; // Include the shared CSS file
import { useNavigate } from 'react-router-dom';

const Assessment2 = () => {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState({
    CommunicationSkills: 0,
    ProblemSolving: 0,
    Teamwork: 0,
    TimeManagement: 0,
    Adaptability: 0,
  });

  const handleRatingChange = (skill, value) => {
    if (value >= 0 && value <= 10) {
      setRatings((prev) => ({ ...prev, [skill]: value }));
    }
  };

  const openAssessmentPage3 = () => {
    navigate('/assessment3');
  };

  return (
    <div className="assessment-container">
      <h1>Assessment Page 2</h1>

      {Object.keys(ratings).map((skill) => (
        <div key={skill} className="skill-section">
          <h4>{skill.replace(/([A-Z])/g, ' $1')}: </h4>
          <div className="slider-container">
            <input
              type="range"
              min="0"
              max="10"
              value={ratings[skill]}
              onChange={(e) => handleRatingChange(skill, e.target.value)}
              className="slider"
            />
            <div
              className="slider-tooltip"
              style={{ left: `${ratings[skill] * 10}%` }}
            >
              {ratings[skill]}
            </div>
          </div>
        </div>
      ))}

      <button className="Next" onClick={openAssessmentPage3}>
        Next
      </button>
    </div>
  );
};

export default Assessment2;
