import React from 'react';
import Logo from './Logo.png';

// Navbar component
const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
        <img src={Logo} alt="Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Sign-In</a></li>
          <li><a href="#">Sign-Up</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
