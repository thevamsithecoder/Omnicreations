import React from "react";
import "../styles/Banner.css";
import BannerImage from "../assets/BannerImage.png"

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <button className="service-button">OUR SERVICE</button>
        <h1>
        <span className="highlight">IT</span> Solutions and 
        <br />Business <span className="highlight">Services</span>
        </h1>
        <p className="subtitle">
          Transforming Ideas into Exceptional Digital <br /> Experiences: Discover the
          Power of Omnicreation
        </p>
        <button className="demo-button">request for a free demo →</button>
        <div className="stats">
          <div className="stat-item">
            <h2>500+</h2>
            <p>Complete <br /> Project</p>
          </div>
          <div className="stat-item">
            <h2>100+</h2>
            <p>Clients</p><br />
          </div>
          <div className="stat-item">
            <h2>50+</h2>
            <p>Active <br />Projects</p>
          </div>
        </div>
      </div>
      <div className="banner-image">
        <img src={BannerImage} alt="Banner Image" />
      
      </div>
    </div>
  );
};

export default Banner;