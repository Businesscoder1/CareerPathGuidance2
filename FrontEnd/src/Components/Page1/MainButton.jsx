import React from 'react';
import { Link } from 'react-router-dom';
import './Mainbutton.css';

const MainButton = () => {
  return (
    <div className="main-button-container">
      <Link to="/login">
        <button className="main-button">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default MainButton;
