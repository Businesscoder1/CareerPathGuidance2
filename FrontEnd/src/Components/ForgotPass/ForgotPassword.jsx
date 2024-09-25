import React, { useState } from 'react';
import './ForgotPassword.css'; // Import the CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality to handle the password reset process
    console.log('Reset link sent to:', email);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box font-mono">
        <h2 className="forgot-password-title">Forgot Password</h2>
        <p className="forgot-password-text">Enter your email address below, and we'll send you a link to reset your password.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" className="bg-blue-500 w-40 h-10 rounded-xl hover:bg-blue-400">Send Reset Link</button>
        </form>

        <div className="back-to-login mt-5">
          <a href="/login" className='text-sm text-blue-500 hover:text-red-500 '>Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
