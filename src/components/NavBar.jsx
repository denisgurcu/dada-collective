import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-top">
          <div className="logo">
            <img src="/logo.png" alt="Dada Collective logo" />
          </div>

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-bottom">
          <div className="bottom-left">Vancouver, BC</div>
          <div className="bottom-right">Made with 🍸</div>
        </div>
      </header>

      {menuOpen && (
  <div className={`menu-overlay ${menuOpen ? 'show' : ''}`}>
    <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
    <nav className="menu-links">
      <a href="#">Home</a>
      <a href="#">Works</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </div>
)}

    </>
  );
};

export default Navbar;
