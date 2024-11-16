// src/ServiceCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Serviceitem.css';

const Serviceitem = ({ title, description, background, redirectUrl }) => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate(redirectUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="service-item" style={{ backgroundImage: `url(${background})` }}>
      <div className="content">
        <div className="icon" onClick={handleIconClick}>
          {/* Icon is shown by CSS through ::before */}
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Serviceitem;

