import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/befog_logo.svg";
import { FaBars, FaTimes, FaGlobe, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Select Country");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Befog Logo" className="logo" />
      </div>

      <ul
        className={isOpen ? "nav-links open" : "nav-links"}
        onClick={() => isOpen && toggleMenu()}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <button className="dropdown-toggle">
            <FaGlobe className="world-icon" />
            <span>{selectedCountry}</span>
            <FaChevronDown className="dropdown-icon" />
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li
                onClick={() => handleCountrySelect("India")}
                className="dropdown-item"
              >
                India
              </li>
              <li
                onClick={() => handleCountrySelect("USA")}
                className="dropdown-item"
              >
                USA
              </li>
              <li
                onClick={() => handleCountrySelect("Canada")}
                className="dropdown-item"
              >
                Canada
              </li>
              <li
                onClick={() => handleCountrySelect("Germany")}
                className="dropdown-item"
              >
                Germany
              </li>
            </ul>
          )}
        </li>
      </ul>
      <button
        className="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
