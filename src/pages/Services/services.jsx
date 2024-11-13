// src/App.js
import React from "react";
import ServiceCard from "./ServicesCard/ServicesCard";
import "./services.css";
import Serviceitem from "./Service-item/Serviceitem";

const serviceitem = [
  {
    title: "UI/UX DESIGN",
    description: "",
  },
  {
    title: "WEB DEVELOPMENT",
    description: "",
  },
  {
    title: "DIGITAL MARKETING",
    description: "",
  },
  {
    title: "BUSINESS CONSULTANCY SERVICE",
    description: "",
  },
  {
    title: "WEB DEVELOPMENT",
    description: "",
  },
  {
    title: "DIGITAL MARKETING",
    description: "",
  },
  {
    title: "BUSINESS CONSULTANCY SERVICE",
    description: "",
  },
];

const service = [
  {
    topic: "WE DESIGN",
    icon: "uiux",
    title: "UI/UX Design",
    description:
      "Launch Iconic Brands at the Intersection of Creativity and Technology.",
  },
  {
    topic: "WE DEVELOP",
    icon: "webdev",
    title: "Web Development",
    description:
      "We are Creative Nerds. We Don’t Just Develop Websites, But Also Crafting a Successful Brand for You.",
  },
  {
    topic: "WE SUPPORT",
    icon: "digitalmarketing",
    title: "Digital Marketing",
    description:
      "Nurture Your Vision, Magnify Your Brand by Increasing Your Sales with Inspiring Digital Marketing Solutions.",
  },
  {
    topic: "WE CONSULT",
    icon: "consultancy",
    title: "Business Consultancy Service",
    description: "Let’s Navigate Your Business Challenges Together.",
  },
];

const Services = () => {
  return (
    <div className="ser">
      <div className="header-ser">
        <h1>OUR SERVICES</h1>
        <div className="Rectangle-16-ser"></div>
        <h3>What We Do</h3>
        <p>
          We offer full-funnel digital marketing, web design & development
          services to help businesses gain a competitive edge.
        </p>
      </div>
      <div className="service-cards">
        {service.map((item, index) => (
          <ServiceCard
            key={index}
            topic={item.topic}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="servicesitems">
        <h1>SERVICES WE PROVIDE</h1>
        <div className="services-container">
          {serviceitem.map((service, index) => (
            <Serviceitem key={index} {...service} />
          ))}
        </div>
        <button className="consult-button">Book Free Consultant</button>
      </div>
      <div className="contact">
        <div className="callUs">
          <img src="" alt="" />
          <h3>Call Us</h3>
          <p>Support: +91 1234567890</p>
        </div>
        <div className="img1">
        </div>
        <div className="img2">
        </div>
        <div className="writeUs">
          <img src="" alt="" />
          <h3>Write Us</h3>
          <p>contact.us@befog.in</p>
        </div>
      </div>
      <p className="last-text">Grow your careers at the heart of change</p>
      <button className="cta-button">Get in Touch</button>
    </div>
  );
};

export default Services;
