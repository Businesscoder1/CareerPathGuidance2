import React, { useState } from 'react';
import './Assessment1.css';
import { useNavigate } from 'react-router-dom';

const Assessment1 = () => {
  const [cgpa, setCgpa] = useState(0);
  const [courseStatus, setCourseStatus] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [academicAchievements, setAcademicAchievements] = useState('');
  const [personalInterest, setPersonalInterest] = useState('');
  const [internshipExperience, setInternshipExperience] = useState('');
  const [certificates, setCertificates] = useState('');
  const [leadershipExperience, setLeadershipExperience] = useState('');
  const navigate = useNavigate();

  const handleCgpaChange = (e) => {
    const value = e.target.value;
    // Validate the input to ensure it's between 0 and 10
    if (value === '' || (value >= 0 && value <= 10)) {
      setCgpa(value);
    }
  };

  const openAssessment2Page=()=>{
    navigate('/assessment2');
  }
  

  return (
    
    <div className="assessment-container">
      <h1>Tell us about your Academics</h1>

      <div className="cgpa-section">
        <label>CGPA (0-10): </label>
        <input
          type="text"
          value={cgpa}
          onChange={handleCgpaChange}
          onFocus={() => setIsFocused(true)} // Set focused state
          onBlur={() => setIsFocused(false)} // Reset focused state
          placeholder='0' // Show 0 if not focused and empty
        />
        {cgpa > 10 && <span className="error-message">CGPA cannot be greater than 10.</span>}
      </div>

      <div className="radio-section">
        <h3>Course Status:</h3>
        <label>
         
          <input
            type="radio"
            value="in-progress"
            checked={courseStatus === 'in-progress'}
            onChange={() => setCourseStatus('in-progress')}
          />
          <span className='custom-radio'></span>
          In Progress
        </label>
        <label>
          <input
            type="radio"
            value="completed"
            checked={courseStatus === 'completed'}
            onChange={() => setCourseStatus('completed')}
          />
          <span className='custom-radio'></span>
          Completed
        </label>
      </div>

      <div className="radio-section">
        <h3>Academic Achievements:</h3>
        <label>
          <input
            type="radio"
            value="high"
            checked={academicAchievements === 'high'}
            onChange={() => setAcademicAchievements('high')}
          />
          <span className='custom-radio'></span>
          High
        </label>
        <label>
          <input
            type="radio"
            value="medium"
            checked={academicAchievements === 'medium'}
            onChange={() => setAcademicAchievements('medium')}
          />
          <span className='custom-radio'></span>
          Medium
        </label>
        <label>
          <input
            type="radio"
            value="low"
            checked={academicAchievements === 'low'}
            onChange={() => setAcademicAchievements('low')}
          />
          <span className='custom-radio'></span>
          Low
        </label>
      </div>

      <div className="dropdown-section">
        <h3>Personal Interest:</h3>
        <select value={personalInterest} onChange={(e) => setPersonalInterest(e.target.value)}>
          <option value="">Select...</option>
          <option value="travelling">Travelling</option>
          <option value="coding">Coding</option>
          <option value="gaming">Gaming</option>
          <option value="reading">Reading</option>
          <option value="sports">Sports</option>
          <option value="music">Music</option>
        </select>
      </div>

      <div className="radio-section">
        <h3>Internship Experience:</h3>
        <label>
          <input
            type="radio"
            value="yes"
            checked={internshipExperience === 'yes'}
            onChange={() => setInternshipExperience('yes')}
          />
          <span className='custom-radio'></span>
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={internshipExperience === 'no'}
            onChange={() => setInternshipExperience('no')}
          />
          <span className='custom-radio'></span>
          No
        </label>
      </div>

      <div className="radio-section">
        <h3>Certificates:</h3>
        <label>
          <input
            type="radio"
            value="yes"
            checked={certificates === 'yes'}
            onChange={() => setCertificates('yes')}
          />
          <span className='custom-radio'></span>
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={certificates === 'no'}
            onChange={() => setCertificates('no')}
          />
          <span className='custom-radio'></span>
          No
        </label>
      </div>

      <div className="radio-section">
        <h3>Leadership Experience:</h3>
        <label>
          <input
            type="radio"
            value="yes"
            checked={leadershipExperience === 'yes'}
            onChange={() => setLeadershipExperience('yes')}
          />
          <span className='custom-radio'></span>
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={leadershipExperience === 'no'}
            onChange={() => setLeadershipExperience('no')}
          />
          <span className='custom-radio'></span>
          No
        </label>
      </div>

      <button className='next' onClick={openAssessment2Page}>Next</button>
    </div>
  );
};

export default Assessment1;
