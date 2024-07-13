import React from "react";
import "../styles/Banner.css";
import BannerImage from "../assets/BannerImage.png"

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <button className="service-button">OUR SERVICE</button>
        <h1>
          IT Solutions and <span className="highlight">Business Services</span>
        </h1>
        <p className="subtitle">
          Transforming Ideas into Exceptional Digital Experiences: Discover the
          Power of Omnicreation
        </p>
        <button className="demo-button">request for a free demo →</button>
        <div className="stats">
          <div className="stat-item">
            <h2>500+</h2>
            <p>Complete Project</p>
          </div>
          <div className="stat-item">
            <h2>100+</h2>
            <p>Clients</p>
          </div>
          <div className="stat-item">
            <h2>50+</h2>
            <p>Active Projects</p>
          </div>
        </div>
      </div>
      <div className="banner-image">
        <img src={BannerImage} alt="Banner Image" />
        <div className="image-overlay">
          <span className="client-count">158+ Happy Clients</span>
        </div>
        <span className="trust-badge">100% Trusted</span>
      </div>
    </div>
  );
};

export default Banner;