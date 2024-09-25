import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import knowledge from '../../assets/knowledge.png'
// import menu from '../../assets/menu.png'
const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const openLoginPage = () => {
    navigate('/login');
  };

  const openSignupPage=()=>{
    navigate('./signup');
  }

  const openHomePage=()=>{
    navigate('./home')
  }

  return (
    <nav className="navbar">
      <div className="logo" onClick={openHomePage}><img src={knowledge} className='image' alt="" /> GuideME</div>
      <div className="auth-buttons">
        <button className='login justify-center align-middle bg-black w-20 h-9 rounded-lg  ' onClick={openLoginPage}>Login</button>
        <button className="signup" onClick={openSignupPage}>Signup</button>
        
      </div>
    </nav>
  );
};

export default Navbar;
