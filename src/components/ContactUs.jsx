import React from "react";
import ContactUsImage from "../assets/ContactUsImage.png";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="image-container">
        <img src={ContactUsImage} className="contactusimage" alt="Woman pointing down" />
      </div>
      <div className="content">
        <h2 className="title">
          Helping Businesses <br />
          Improve Their Online <br />Presence
        </h2>
        <p className="description">
          Lorem Ipsum is simply dummy text of <br />the printing and typesetting industry. Lorem Ipsum <br /> has been the industry's .
        </p>
        <button className="contact-button">Contact US →</button>
      </div>
    </div>
  );
};

export default ContactUs;