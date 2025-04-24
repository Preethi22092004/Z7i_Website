import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Z7i.in</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
        <li><Link to="/results">Results</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Student Login</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
