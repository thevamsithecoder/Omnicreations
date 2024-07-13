import React from "react";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="newsletter-subscribe">
        <h2>Subscribe Newsletters</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe Now</button>
        </div>
      </div>
      <hr />
      <div className="footer-links">
        <nav>
          <ul>
            <li><a href="#">blog</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2023 Omnicreation. All rights reserved.</p>
        <div className="logo">Logo</div>
        <div className="legal-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;