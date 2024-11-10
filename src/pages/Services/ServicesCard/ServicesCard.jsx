// src/ServiceCard.js
import React from 'react';
import './ServicesCard.css';

const ServicesCard = ({ topic, title, description }) => {
  // Map the topic to a class name for the icon
  const topicClass = {
    "UI/UX Design": "uiux",
    "Web Development": "webdev",
    "Digital Marketing": "digitalmarketing",
    "Consultancy": "consultancy",
  }[topic] || ""; // Default to an empty string if topic is unknown

  return (
    <div className="service-card">
      <p>{topic}</p>
      <div className={`icon ${topicClass}`}>
        {/* Icon is shown by CSS through ::before */}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCard;
