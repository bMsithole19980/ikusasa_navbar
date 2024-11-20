import React, { useState } from "react";
import {
  FaBars,
  FaBuilding,
  FaBriefcase,
  FaTimes,
  FaChevronDown,
  FaGraduationCap,
  FaClipboardList,
  FaUsers,
  FaHandHolding,
} from "react-icons/fa";
import "./Navbar.css";
import Logo from "../Images/Ikusasa.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src={Logo} alt="ikusasa-logo" />
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobile ? "nav-links-mobile" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
          onMouseLeave={() => !isMobile && setIsServicesOpen(false)}
          onClick={() => isMobile && setIsServicesOpen(!isServicesOpen)}
        >
          <a href="/services">
            Services <FaChevronDown />
          </a>
          {isServicesOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="/services/training">
                  <FaGraduationCap style={{ marginRight: "10px" }} /> Training
                </a>
              </li>
              <li>
                <a href="/services/reseller">
                  <FaClipboardList style={{ marginRight: "10px" }} /> Reseller
                </a>
              </li>
              <li>
                <a href="/services/consulting">
                  <FaHandHolding style={{ marginRight: "10px" }} /> Consulting
                </a>
              </li>
            </ul>
          )}
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => !isMobile && setIsAboutOpen(true)}
          onMouseLeave={() => !isMobile && setIsAboutOpen(false)}
          onClick={() => isMobile && setIsAboutOpen(!isAboutOpen)}
        >
          <a href="/about">
            About <FaChevronDown />
          </a>
          {isAboutOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="/about/company">
                  <FaBuilding style={{ marginRight: "10px" }} /> Company
                </a>
              </li>
              <li>
                <a href="/about/team">
                  <FaUsers style={{ marginRight: "10px" }} /> Team
                </a>
              </li>
              <li>
                <a href="/about/career">
                  <FaBriefcase style={{ marginRight: "10px" }} /> Career
                </a>
              </li>
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

      {/* Hamburger Icon for Mobile */}
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
