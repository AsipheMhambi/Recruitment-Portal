// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';

const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/Sign-In">Sign-In</Link></li>
          <li><Link to="/signup">Sign-Up</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
