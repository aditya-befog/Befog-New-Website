// src/ServiceCard.js
import React from 'react';
import './ServicesCard.css';

const ServicesCard = ({ topic, title, description }) => {
  const topicClass = {
    "UI/UX Design": "uiux",
    "Web Development": "webdev",
    "Digital Marketing": "digitalmarketing",
    "Consultancy": "consultancy",
  }[topic] || "";

  return (
    <div className="service-card">
      <p>{topic}</p>
      <div className={`icon ${topicClass}`}>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCard;
