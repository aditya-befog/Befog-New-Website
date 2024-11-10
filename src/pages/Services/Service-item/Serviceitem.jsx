// src/ServiceCard.js
import React from 'react';
import './Serviceitem.css';

const Serviceitem = ({ title, description, background }) => {
  return (
    <div className="service-item" style={{ backgroundImage: `url(${background})` }}>
      <div className="content">
      <div className={`icon`}>
        {/* Icon is shown by CSS through ::before */}
      </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Serviceitem;
