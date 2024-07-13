import React from 'react';
import "../styles/CurrentClients.css";
 

const CurrentClients = () => {
  return (
    <div className="current-clients">
      <p className="section-label">CURRENT CLIENTS</p>
      <h2 className="section-title">Trusted Clients & Partners</h2>
      <div className="client-logos">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="logo-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="logo-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            Logoipsum
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentClients;