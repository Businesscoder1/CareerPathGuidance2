import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './SideBar.css'; // Import the CSS file
import knowledge from '../../assets/knowledge.png'
import menu from '../../assets/menu.png'
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const closeSidebar = (e) => {
    if (isOpen && !e.target.closest('.sidebar') && !e.target.closest('.hamburger')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeSidebar);
    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Hamburger Icon */}
      <div className='hamburger' onClick={toggleSidebar}>
        <img src={menu} id='hamburgerimg' />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Logo and Website Name */}
        <div className="sidebar-header">
          <img src={knowledge} className="logo" />
          <span className="site-name">GuideME</span>
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                <i className="icon fas fa-home"></i> {/* FontAwesome icon for home */}
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/explore" className="nav-link">
                <i className="icon fas fa-briefcase"></i> {/* FontAwesome icon for explore */}
                <span className="nav-text">Explore Career</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <i className="icon fas fa-info-circle"></i> {/* FontAwesome icon for about */}
                <span className="nav-text">About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                <i className="icon fas fa-envelope"></i> {/* FontAwesome icon for contact */}
                <span className="nav-text">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
