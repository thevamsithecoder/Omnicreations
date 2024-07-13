import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Omnicreation</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/service">Service</Link></li>
        </ul>
        <button className="cta-button">Get in Touch →</button>
      </nav>
    </header>
  );
};

export default Header;