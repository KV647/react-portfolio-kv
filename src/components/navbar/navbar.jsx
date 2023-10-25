import React from 'react';
import './Navbar.css'; 


const Navbar = ({ onNavigate }) => {
  return (
    <div className="navbar">
    <a href="/" onClick={onNavigate}>Home</a>
    <a href="/Portfolio" onClick={onNavigate}>Portfolio</a>
    <a href="/Contact" onClick={onNavigate}>Contact</a>
    <a href="/Resume" onClick={onNavigate}>Resume</a>
</div>
  );
};

export default Navbar;