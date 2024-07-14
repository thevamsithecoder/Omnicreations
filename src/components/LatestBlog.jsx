import React from 'react';
import '../styles/LatestBlog.css';
import ContactUsImage from "../assets/ContactUsImage.png";

const LatestBlog = () => {
  return (
    <div className="latest-blog-container">
      <h1 className="latest-blog-title">Latest blog</h1>
      <div className="latest-blog-cards">
        <div className="latest-blog-card">
          <img src={ContactUsImage} className='blog-card' alt="Blog 1" />
          <p>Humans are much more smarter than AI</p>
          <p>Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.</p>
          <p className="learn-more">Learn more</p>
        </div>
        <div className="latest-blog-card">
          <img src={ContactUsImage} className='blog-card' alt="Blog 2" />
          <p>Humans are much more smarter than AI</p>
          <p>Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.</p>
          <p className="learn-more">Learn more</p>
        </div>
        <div className="latest-blog-card">
          <img src={ContactUsImage} className='blog-card' alt="Blog 3" />
          <p>Humans are much more smarter than AI</p>
          <p>Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.</p>
          <p className="learn-more">Learn more</p>
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
