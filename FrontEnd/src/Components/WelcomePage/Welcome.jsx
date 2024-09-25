import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Welcome.css';
// import background from '../../assets/bg.jpg'
const Welcome = () => {
  const navigate = useNavigate(); // Use the hook to get the navigate function

  const openAssessmentPage = () => {
    navigate('/assessment1'); // Correctly navigate to the assessment page
  };

  const openAI=()=>{
    window.open('https://en.wikipedia.org/wiki/Artificial_intelligence','_blank');
  }
  const openDS=()=>{
    window.open('https://en.wikipedia.org/wiki/Data_science','_blank')
  }
  const openCS=()=>{
      window.open('https://en.wikipedia.org/wiki/Computer_security','_blank')
  }
  const openWeb=()=>{
    window.open('https://en.wikipedia.org/wiki/Web_development','_blank');
  }
  const openCloud=()=>{
    window.open('https://en.wikipedia.org/wiki/Cloud_computing','_blank')
  }
  const openDev=()=>{
    window.open('https://en.wikipedia.org/wiki/DevOps','_balnks')
  }
  return (
    <div className="welcome-container">
      <h3>Your journey to success starts here – explore, learn, and achieve!</h3>
      
      <div className="sector-container" onClick={openAI}>
        <div className="sector-card cursor-pointer">
          <h4>Artificial Intelligence</h4>
          <p>Unlock the future of automation and intelligence.</p>
        </div>
        <div className="sector-card cursor-pointer" onClick={openDS}>
          <h4>Data Science</h4>
          <p>Discover insights from data and drive decisions.</p>
        </div>
        <div className="sector-card cursor-pointer" onClick={openCS}>
          <h4>Cybersecurity</h4>
          <p>Secure the world of technology and protect data.</p>
        </div>
        <div className="sector-card cursor-pointer" onClick={openWeb}>
          <h4>Web Development</h4>
          <p>Create interactive and dynamic web experiences.</p>
        </div>
        <div className="sector-card cursor-pointer" onClick={openCloud}>
          <h4>Cloud Computing</h4>
          <p>Innovate and scale in the cloud with agility.</p>
        </div>
        <div className="sector-card cursor-pointer" onClick={openDev}>
          <h4>DevOps</h4>
          <p>Streamline development and operations together.</p>
        </div>
      </div>

      <div className="assessment-button-container">
        <button className="assessment-button" onClick={openAssessmentPage}>Start Assessment</button>
      </div>
    </div>
  );
}

export default Welcome;
