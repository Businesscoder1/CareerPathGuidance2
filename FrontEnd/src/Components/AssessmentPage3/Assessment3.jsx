import React, { useState } from 'react';
import './Assessment3.css'; // Include shared CSS file
import { useNavigate } from 'react-router-dom';

const Assessment3 = () => {
  const [ratings, setRatings] = useState({
    Python: 0,
    Java: 0,
    CPP: 0,
    JavaScript: 0,
    CSharp: 0,
    PHP: 0,
    Ruby: 0,
    Swift: 0,
    Go: 0,
    Rust: 0,
    Others: 0,
    InterestInSoftwareDev: 0,
    InterestInDatabaseManagement: 0,
    InterestInNetworkingSkills: 0,
    InterestInWebDevelopment: 0,
  });
  const navigate=useNavigate();
  const handleRatingChange = (skill, value) => {
    if (value >= 0 && value <= 10) {
      setRatings((prev) => ({ ...prev, [skill]: value }));
    }
  };
  const openAssessmentpage2=()=>{
    navigate('/assessment2')
  }

  return (
    <div className="assessment-container">
      <h1>Evaluate Your Proficiency in Programming and Technical Skills</h1>

      {Object.keys(ratings).map((skill) => (
        <div key={skill} className="skill-section">
          <h4>{skill.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')}:</h4>
          <div className="slider-container">
            <input
              type="range"
              min="0"
              max="10"
              value={ratings[skill]}
              onChange={(e) => handleRatingChange(skill, e.target.value)}
              className="slider"
            />
            <div className="slider-tooltip" style={{ left: `${ratings[skill] * 10}%` }}>
              {ratings[skill]}
            </div>
          </div>
        </div>
      ))}
      <div className='nextback'>
      <button className='back'onClick={openAssessmentpage2}>Back</button>
      <button className="submit-button">Submit</button>
      </div>
     
    </div>
  );
};

export default Assessment3;
