import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    
    // You can add your authentication logic here. After successful login:
    navigate('/mainpage'); // Navigate to Welcome page (mainpage) after successful login
  };

  const openForget = (e) => {
    e.preventDefault(); // Prevent default anchor tag behavior
    navigate('/forgot'); // Navigate to Forgot Password page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to GuideME</h2>
        <p>Please log in to continue</p>
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="login-btn">Login</button>
        </form>
        {/* Forgot Password Link */}
        <button className='forgot' onClick={openForget}>Forgot Password?</button>
      </div>
    </div>
  );
};

export default Login;
