import React from "react";
import "./Footer.css";
import logo from "../../assets/transparent_short.webp";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi"; // Outlined mail icon from Feather

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-logo">
        <img loading="lazy" decoding="async" src={logo} alt="Logo" className="logo-image" />
        <p className="logo-text">Jom Hands-On</p>
      </div>
      <div className="footer-social">
        <h2 className="social-title">Follow Us</h2>
        <div className="social-icons">
          <a
            aria-label="Jom Hands-On on Instagram" href="https://www.instagram.com/project.jomhandson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="mailto:jomhandson@gmail.com" aria-label="Email Jom Hands-On"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail className="social-icon" />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>
        &copy; {new Date().getFullYear()} <strong>Jom Hands-On</strong>. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
