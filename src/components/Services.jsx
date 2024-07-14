import React from 'react';
import ServicesImage from "../assets/ServicesImage.png";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-left">
        <button className="services-button">WHAT WE DO</button>
        <h1>Our Service</h1>
        <p>
          Katalyst Studio offers a range of design services that <br />are tailored to meet the unique needs of each client
        </p>
        <div className="services-list">
          <div className="service-item">
            <span>01</span>
            <button>UI/UX Design<span className="arrow">→</span></button>
          </div>
          <div className="service-item">
            <span>02</span>
            <button>Web Development<span className="arrow">→</span></button>
          </div>
          <div className="service-item">
            <span>03</span>
            <button>Social Media Adds<span className="arrow">→</span></button>
          </div>
          <div className="service-item">
            <span>04</span>
            <button>influencer reserch<span className="arrow">→</span></button>
          </div>
        </div>
      </div>
      <div className="services-right">
        <img src={ServicesImage}  alt="Woman smiling" />
      </div>
    </div>
  );
};

export default Services;