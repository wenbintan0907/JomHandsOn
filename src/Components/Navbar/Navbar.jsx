import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/transparent_long.png";
import menu from "../../assets/edusity_assets/menu-icon.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isGalleryPage = location.pathname === "/gallery";

  const handleAboutClick = () => {
    if (isAboutPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`container ${sticky && !isAboutPage ? "dark-nav" : ""} ${
        isAboutPage ? "non-transparent-nav" : ""
      }`}
    >
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          {isHomePage ? (
            <ScrollLink to="hero" smooth={true} offset={0} duration={800}>
              Home
            </ScrollLink>
          ) : (
            <RouterLink to="/">Home</RouterLink>
          )}
        </li>
        <li>
          <RouterLink to="/about" onClick={handleAboutClick}>
            About Us
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/gallery" onClick={handleAboutClick}>
            Gallery
          </RouterLink>
        </li>
        <li>
          {isHomePage ? (
            <ScrollLink
              to="contact"
              smooth={true}
              offset={0}
              duration={800}
              className="btn"
            >
              Contact Us
            </ScrollLink>
          ) : (
            <RouterLink to="/#contact" className="btn">
              Contact Us
            </RouterLink>
          )}
        </li>
      </ul>
      <img
        src={menu}
        alt="menu icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
