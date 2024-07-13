import React from "react";
import ContactUsImage from "../assets/ContactUsImage.png";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="image-container">
        <img src={ContactUsImage} className="contactusimage" alt="Woman pointing down" />
        <div className="play-button">▶</div>
      </div>
      <div className="content">
        <h2 className="title">
          Helping Businesses Improve Their Online Presence
        </h2>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .
        </p>
        <button className="contact-button">Contact US →</button>
      </div>
    </div>
  );
};

export default ContactUs;