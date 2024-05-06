import React from 'react';

// Navbar component
const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="/Logo.png" alt="Logo" />
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
