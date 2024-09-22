import React, { useState } from 'react';
import './Signup.css';
import { Navigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [college, setCollege] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    setError('');
    // Perform the signup logic here, e.g., sending the data to an API
    console.log({
      name,
      email,
      education,
      college,
      password,
    });
    // Reset form after submission
    setName('');
    setEmail('');
    setEducation('');
    setCollege('');
    setPassword('');
    setConfirmPassword('');
  };
  const openClerkLogin=()=>{
    Navigate('/clerklogin');
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          {/* Name Input */}
          <div className="input-group">
            <label>Name</label>
            <input 
              type="text" 
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)} 
              required
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>

          {/* Education Dropdown */}
          <div className="input-group">
            <label>Education</label>
            <select 
              value={education} 
              onChange={(e) => setEducation(e.target.value)} 
              required
            >
              <option value="" disabled>Select your education level</option>
              <option value="High School">High School</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
          </div>

          {/* College Input */}
          <div className="input-group">
            <label>College</label>
            <input 
              type="text" 
              placeholder="Enter your college name"
              value={college}
              onChange={(e) => setCollege(e.target.value)} 
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="input-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="error-message">{error}</p>}

          {/* Submit Button */}
          <button type="submit" className="signup-btn" onClick={openClerkLogin}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;