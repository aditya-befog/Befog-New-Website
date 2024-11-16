import React from 'react';
import './ServiceAbout.css';

const ServiceAbout = ({ title, description, background }) => {
  return (
    <div className="service-item-about" style={{ backgroundImage: `url(${background})` }}>
      <div className="content-About">
      <div className={`icon`}>
      </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceAbout;