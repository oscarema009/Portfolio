import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Navbar() {
  return (
    <nav className="navbar">
    <div className="overlap-group">
        <div className="div">
            <Link className="text-wrapper" to="">Home</Link>
            <Link className="text-wrapper" to="/about">About me</Link>
            <Link className="text-wrapper" to="/projects">Projects</Link>
            <Link className="text-wrapper" to="/contact">Contact</Link>
        </div>
        <img className="frame" alt="Frame" src="frame-17.svg" />
    </div>
  </nav>
  );
}

export default Navbar;
