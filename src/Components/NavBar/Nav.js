import React from 'react';
import './Nav.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Delicious Bites</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
