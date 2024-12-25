import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #3aafa9;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin: 0;
  position: static;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterTextLeft = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
  text-align: left;
  flex: 1;

  strong {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const FooterTextRight = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
  text-align: right;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;

const ContactWrapper = styled.div`
  padding: 0px 20px;
  max-width: 1400px;
  margin: 0px auto;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; // Changed from center to flex-start
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 0;
  text-align: left; // Ensure left alignment
  margin-top: 12px;

  @media (max-width: 768px) {
    /* text-align: center; */ // Commented out to maintain left alignment
    text-align: center; // Explicitly set to center for mobile
    padding: 10px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding: 0;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center; // Optionally, keep this if you want to center text on small screens
    padding: 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  justify-content: flex-start; // Changed from center to flex-start;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center; // Changed from center to flex-start
  }
`;

const SocialLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;  // Align logos to the right

  @media (max-width: 768px) {
    flex-direction: row;  // Stack logos vertically on small screens
    align-items: center;  // Center logos on small screens
    gap: 10px;  // Adjust space between logos on small screens
  }
`;

const Logo = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 5px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0px;
    width: 75px;
    height: 75px;
  }
`;

const SocialLogo = styled.img`
  width: 75px;
  height: 75px;
  margin: 0:  // Remove any extra right margin

  @media (max-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

const LogoText = styled.h1`
  font-size: 22px;
  color: #fdf5df;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
    margin:0px;
  }
`;

const SocialTitle = styled.h2`
  font-size: 14px;
  color: #fdf5df;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center; // Optionally, keep this if you want to center text on small screens
`;

const Footer = () => (
  <FooterContainer>

<ContactWrapper>
      <ContactContainer>
        <LeftSection>
          <LogoContainer>
            <Logo src="jhologo.png" alt="Logo" />
            <LogoText>Jom Hands-On</LogoText>
          </LogoContainer>
        </LeftSection>

        <RightSection>
          <SocialTitle>
            Follow us on: 
          </SocialTitle>
          <SocialLogoContainer>
            <a href="https://www.instagram.com/project.jomhandson?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
              <SocialLogo src="instagramfdf5df.png" alt="Instagram" />
            </a>
            {/* change to email link*/}
            <a href="https://www.instagram.com/project.jomhandson?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <SocialLogo src="mailfdf5df.png" alt="Mail" />
            </a>
          </SocialLogoContainer>
        </RightSection>
      </ContactContainer>
    </ContactWrapper>

    <FooterContent>
      <FooterTextLeft>
        &copy; 2024 <strong>Jom Hands-On</strong>. All Rights Reserved.
      </FooterTextLeft>
      <FooterTextRight>Jom ah Jom Ah Jom Since 2024</FooterTextRight>
    </FooterContent>
  </FooterContainer>
);

export default Footer;
