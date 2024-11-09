import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import logo from "../../assets/picsvg.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-content">
        <p className="footer-text">Befog(A&W Technology)</p>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle className="icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
