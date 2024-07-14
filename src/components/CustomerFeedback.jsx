import React from 'react';
import '../styles/CustomerFeedback.css';
import ContactUsImage from "../assets/ContactUsImage.png";



const CustomerFeedback = () => {
  return (
    <div className="customer-feedback-container">
      <h2 className="customer-feedback-title">Our customers speak for <br /> themselves.</h2>
      <div className="customer-feedback-cards">
        <div className="customer-feedback-card">
          <p>
            Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.
          </p>
          <div className="customer-feedback-profile">
            <img src={ContactUsImage} alt="Jacqueline Wright" />
            <div>
              <p>Jacqueline Wright</p>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="customer-feedback-card">
          <p>
            Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.
          </p>
          <div className="customer-feedback-profile">
            <img src={ContactUsImage} alt="Jacqueline Wright" />
            <div>
              <p>Jacqueline Wright</p>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerFeedback;
