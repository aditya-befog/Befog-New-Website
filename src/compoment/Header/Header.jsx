import React from 'react';
import './Header.css';
import ServiceCard from '../Service/Service.jsx';

const services = [
  {
    title: "UI/UX Design",
    icon: "pencil",
    description: "Our Design Thinking team conceptualizes intuitive, engaging, and aesthetically attractive User Interface (UI) design that offers seamless User Experience (UX) across the web and mobile devices for your audience.",
  },
  {
    title: "Web Development",
    icon: "lightning",
    description: "We are Creative Nerds. We are Technocrats. But We are Passionate about creating a Successful Brand for You!!!",
  },
  {
    title: "Mobile App Development",
    icon: "mobile",
    description: "Nurture Your Vision, Magnify Your Brand & Increase Your Sales with Inspiring Digital Marketing Solutions.",
  },
  {
    title: "AI Development",
    icon: "circle",
    description: "Our Design Thinking team conceptualizes intuitive, engaging, and aesthetically attractive User Interface (UI) design that offers seamless User Experience (UX) across the web and mobile devices for your audience.",
  },
  {
    title: "ChatBot",
    icon: "circle",
    description: "We are Creative Nerds. We are Technocrats. But We are Passionate about creating a Successful Brand for You!!!",
  },
  {
    title: "SEO/CRM",
    icon: "circle",
    description: "Nurture Your Vision, Magnify Your Brand & Increase Your Sales with Inspiring Digital Marketing Solutions.",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="section1">
        <h1>Design Your Digital Identity</h1>
        <p>
          Build a Distinctive Digital Identity: Where Strategy Meets Creativity to Define Your Unique Online Presence.
        </p>
        <button className="cta-button">Get in Touch</button>
      </div>
      <div className="section2">
        <h1>We are one of the most effective Tech Solution Company</h1>
        <p>
          Empowering Your Digital Identity: Combining Purposeful Strategy and Creative Innovation to Build an Engaging and Memorable Online Presence
        </p>
      </div>
      <div className="services">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
