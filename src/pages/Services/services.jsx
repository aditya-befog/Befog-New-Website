// src/App.js
import React from "react";
import ServiceCard from "./ServicesCard/ServicesCard";
import "./services.css";
import Serviceitem from "./Service-item/Serviceitem";

const serviceitem = [
  {
    title: "UI/UX DESIGN",
    description: "",
    redirectUrl:"/uiux",
  },
  {
    title: "WEB DEVELOPMENT",
    description: "",
    redirectUrl:"/web",
  },
  {
    title: "DIGITAL MARKETING",
    description: "",
    redirectUrl:"/Digital",
  },
  {
    title: "BUSINESS CONSULTANCY SERVICE",
    description: "",
    redirectUrl:"/Business",
  },
  {
    title: "Social Media Marketing",
    description: "",
    redirectUrl:"/Social",
  },
  {
    title: "Content Strategy",
    description: "",
    redirectUrl:"/strategy",
  },
  {
    title: "Paid Advertising",
    description: "",
    redirectUrl:"/paid",
  },
];

const service = [
  {
    topic: "WE DESIGN",
    icon: "https://s3-alpha-sig.figma.com/img/8c6d/ec9f/6c3c47867525c0e1ff3da9f62be1ce20?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhUIxBwjnjh36dpGDKVPmakp0-YoQAPHygC2SveKNKCKOt6lIE4ZDs2CExcAwo2eGYHbkrwDtc88P5VnZ93sYFsh6URMx6ruCIXkNr9v89gEtc3eRlmutgNA3YXP2jQ3YwrcrFFLCZK21FbKEOrLb5BHPKC8C~jXC1XTeZJKMiMHo0kV9Lxh8l6qgvkB1RWK19uDuF0f0E00dAK4yyZmPuaIgjYlbpLU8Oe3E5jbTSCSIi6whiy22zlh~im~QPWdZcusQsq3CIOaRdeCubzIsRE0Li0VsXFdvIdFJGKbTkKhSyt0~tHkShKEUBv1kb0kVVF~~FY8yUxleVNXdjpN0A__",
    title: "UI/UX Design",
    description:
      "Launch Iconic Brands at the Intersection of Creativity and Technology.",
  },
  {
    topic: "WE DEVELOP",
    icon: "https://s3-alpha-sig.figma.com/img/af9b/ebb0/6273adfde68214990270d7b6bfee730a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fwwGg2yhDMEUc98lESCcgbyWjZu7RqIv8AIyO-hGFkQ2m-jdvZmwkCZeMIDwfDkPVGCJIW~RZcfNGLkkUteXU7No7~DT28sCABNVrGRvA852YWlAEPlxOEl6mRWMiMtZWJ3g84z6i4kxhhiEkKPVfyzYcYdjbLQltiqFCTKcpqnG6Ut7YWzMQEyIhqCODB~cceNEmlUnkZAomcIpkyRVlPQ-5XdTYvn0R4irveTKHnlotNre5~0NSgRJX0Q8Eeek7FpV-oDk~I78ellL0VPrufJg3GDVT6HZkn7F6S0RSroR5CO0mUlCmLgkVo5zukN4~C8vrwn3Y7fyw-GlXyW60w__",
    title: "Web Development",
    description:
      "We are Creative Nerds. We Don’t Just Develop Websites, But Also Crafting a Successful Brand for You.",
  },
  {
    topic: "WE SUPPORT",
    icon: "https://s3-alpha-sig.figma.com/img/13b4/9990/f6c23442ad47b00bea8c34d0945d8b5c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OHa8hmfSbPkB7-e8ftWyC8dlzcVEIbGOW9--~A6I46TIiKKb5IaPW9ILChmQCIPYi~AjBzbZp6afBjnipQdF-c~lGI7lS2J4CGGgr70hxrJrYjWhUWfcd-dLfZ0pG8GzdqmdqASRPVxKSLGEJQdPokM8Wqed8tN1eSm5U0oMF7Z3oYNlrBorz7Oxb-yxty~ljesxuTZqmuRZpWfTujUlwCwxsFMDTIDpx4q3TrtP4f1hQt71ZGhfXfpHUVFDL9q3BMv~qvuaFKMqaIBXUvVoU38GSA~6d1HxkT80aanLGCcLb~SPwTdf~FYoQxx0fitRqlApugjQqX1v5mWxa4bhVQ__",
    title: "Digital Marketing",
    description:
      "Nurture Your Vision, Magnify Your Brand by Increasing Your Sales with Inspiring Digital Marketing Solutions.",
  },
  {
    topic: "WE CONSULT",
    icon: "https://s3-alpha-sig.figma.com/img/13b4/9990/f6c23442ad47b00bea8c34d0945d8b5c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OHa8hmfSbPkB7-e8ftWyC8dlzcVEIbGOW9--~A6I46TIiKKb5IaPW9ILChmQCIPYi~AjBzbZp6afBjnipQdF-c~lGI7lS2J4CGGgr70hxrJrYjWhUWfcd-dLfZ0pG8GzdqmdqASRPVxKSLGEJQdPokM8Wqed8tN1eSm5U0oMF7Z3oYNlrBorz7Oxb-yxty~ljesxuTZqmuRZpWfTujUlwCwxsFMDTIDpx4q3TrtP4f1hQt71ZGhfXfpHUVFDL9q3BMv~qvuaFKMqaIBXUvVoU38GSA~6d1HxkT80aanLGCcLb~SPwTdf~FYoQxx0fitRqlApugjQqX1v5mWxa4bhVQ__",
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
