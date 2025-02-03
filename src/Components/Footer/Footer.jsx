import React from "react";
import "./Footer.css";
import logo from "../../assets/transparent_short.png";
import InstagramLogo from "../../assets/instagram.svg";
import emailIcon from "../../assets/MailLogo.png";

const Footer = () => (
  <footer className="FooterContainer">
    <div className="ContactWrapper">
      <div className="ContactContainer">
        <div className="LeftSection">
          <div className="LogoContainer JHOLC">
            <img className="Logo" src={logo} alt="Logo" />
            <h1 className="LogoText">Jom Hands-On</h1>
          </div>
        </div>

        <div className="RightSection">
          <h2 className="SocialTitle">Follow us on:</h2>
          <div className="LogoContainer SocialLC">
            <a
              href="https://www.instagram.com/project.jomhandson?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <img
                className="InstagramLogo"
                src="src\assets\InstagramLogo.png"
                alt="Instagram"
              />
            </a>
            {/* change to email link*/}
            <a
              href="https://www.instagram.com/project.jomhandson?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <img
                className="MailLogo"
                src="src\assets\MailLogo.png"
                alt="Mail"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="FooterContent">
      <p className="FooterTextLeft">
        &copy; 2024 <strong>Jom Hands-On</strong>. All Rights Reserved.
      </p>
      <p className="FooterTextRight"></p>
    </div>
  </footer>
);

export default Footer;
