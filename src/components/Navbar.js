import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown , FaGraduationCap , FaClipboardList , FaHandHolding } from "react-icons/fa"; // Import React Icons for Hamburger, Close, and Down Arrow
import "./Navbar.css";
import Logo from '../Images/Ikusasa.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For services dropdown menu
  const [isAboutOpen, setIsAboutOpen] = useState(false); // For about dropdown menu

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="ikusasa-logo" />
      </div>
      <ul className={`nav-links ${isMobile ? "nav-links-mobile" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li 
          className="dropdown"
          onMouseEnter={() => setIsServicesOpen(true)} // Show dropdown on hover
          onMouseLeave={() => setIsServicesOpen(false)} // Hide dropdown when hover ends
        >
          <a href="/services">
            Services <FaChevronDown />
          </a>
          {isServicesOpen && (
            <ul className="dropdown-menu">
                <ul className="dropdown-menu">
              <li><a href="/services/training"><FaGraduationCap style={{ marginRight: '10px' }} /> Training</a></li> {/* Icon added here */}
              <li><a href="/services/reseller"><FaClipboardList style={{ marginRight: '10px' }} /> Reseller</a></li> {/* Icon added here */}
              <li><a href="/services/consulting"><FaHandHolding style={{ marginRight: '10px' }} /> Consulting</a></li> {/* Icon added here */}
            </ul>
            </ul>
          )}
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setIsAboutOpen(true)} // Show dropdown on hover
          onMouseLeave={() => setIsAboutOpen(false)} // Hide dropdown when hover ends
        >
          <a href="/about">
            About <FaChevronDown />
          </a>
          {isAboutOpen && (
            <ul className="dropdown-menu">
              <li><a href="/about/company">Company</a></li>
              <li><a href="/about/team">Team</a></li>
              <li><a href="/about/career">Career</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="/courses">Courses</a>
        </li>
        <li>
          <a href="/kids">For Kids</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
