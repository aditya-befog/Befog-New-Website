import React from "react";
import "./Header.css";
import ServiceCard from "../Service/Service.jsx";

const services = [
  {
    title: "UI/UX Design",
    icon: "pencil",
    description:
      "Our Design Thinking team conceptualizes intuitive, engaging, and aesthetically attractive User Interface (UI) design that offers seamless User Experience (UX) across the web and mobile devices for your audience.",
  },
  {
    title: "Web Development",
    icon: "lightning",
    description:
      "We are Creative Nerds. We are Technocrats. But We are Passionate about creating a Successful Brand for You!!!",
  },
  {
    title: "Mobile App Development",
    icon: "mobile",
    description:
      "Nurture Your Vision, Magnify Your Brand & Increase Your Sales with Inspiring Digital Marketing Solutions.",
  },
  {
    title: "AI Development",
    icon: "circle",
    description:
      "Our Design Thinking team conceptualizes intuitive, engaging, and aesthetically attractive User Interface (UI) design that offers seamless User Experience (UX) across the web and mobile devices for your audience.",
  },
  {
    title: "ChatBot",
    icon: "circle",
    description:
      "We are Creative Nerds. We are Technocrats. But We are Passionate about creating a Successful Brand for You!!!",
  },
  {
    title: "SEO/CRM",
    icon: "circle",
    description:
      "Nurture Your Vision, Magnify Your Brand & Increase Your Sales with Inspiring Digital Marketing Solutions.",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="section1">
        <h1>Design Your Digital Identity</h1>
        <p>
          Build a Distinctive Digital Identity: Where Strategy Meets Creativity
          to Define Your Unique Online Presence.
        </p>
        <button className="cta-button">Get in Touch</button>
      </div>
      <div className="section2">
        <h1>We are one of the most effective Tech Solution Company</h1>
        <p>
          Empowering Your Digital Identity: Combining Purposeful Strategy and
          Creative Innovation to Build an Engaging and Memorable Online Presence
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
      <div class="container">
        <div class="pointer">
          <h1>01</h1>
          <h2>Strategy</h2>
        </div>
        <div class="content">
          <p>
            This is the content paragraph that will align to the right of the
            headings.
          </p>
          <div class="circle"></div>
        </div>
      </div>
      <div class="container-left">
        <div class="pointer-left">
          <h1>01</h1>
          <h2>Strategy</h2>
        </div>
        <div class="content">
          <p>
            This is the content paragraph that will align to the left of the
            headings.
          </p>
          <div class="circle"></div>
        </div>
      </div>
      <div class="container">
        <div class="pointer">
          <h1>01</h1>
          <h2>Strategy</h2>
        </div>
        <div class="content">
          <p>
            This is the content paragraph that will align to the right of the
            headings.
          </p>
          <div class="circle"></div>
        </div>
      </div>
      <div class="container-left-sec">
        <div class="pointer-left">
          <h1>01</h1>
          <h2>Strategy</h2>
        </div>
        <div class="content">
          <p>
            This is the content paragraph that will align to the left of the
            headings.
          </p>
          <div class="circle"></div>
        </div>
      </div>
      <div className="button">
        <button>GET STARTED</button>
      </div>
      <div className="Founder">
        <h1>Meet the Founder</h1>
        <div className="pointer">
          <h1>Founder</h1>
        </div>
        <div className="container-Founder">
          <div className="text-content">
            <h3>Sanjay Mehrotra</h3>
            <p>
              It is with great enthusiasm and pride that I welcome you to Befog.
              As the founder of this innovative IT startup, I am excited to
              share our vision and the journey that has brought us here. At
              Befog, we are dedicated to pushing the boundaries of technology to
              deliver solutions that not only meet the needs of today but
              anticipate the challenges of tomorrow. <br /> Our story began with
              a simple yet profound belief: technology holds the key to
              transforming businesses and enriching lives. With this conviction
              at our core, we have assembled a team of exceptional individuals
              who share a common passion for innovation and excellence.
              Together, we are committed to creating a future where technology
              empowers organizations to achieve their fullest potential.
            </p>
            <button>Explore more</button>
          </div>
          <div className="founder-img">
            <img
              src="https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNlb3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Founder"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
