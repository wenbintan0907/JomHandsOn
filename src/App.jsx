import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import FadeInSection from "./Components/FadeInSection/FadeInSection";
import Hero from "./Components/Hero/Hero";
import About from "./Pages/About/About";
import Founders from "./Components/Founders/Founders";
import IT from "./Components/IT/IT";
import Contact from "./Components/Contact/Contact";
import ContactPage from "./Pages/Contact/ContactPage";
import Footer from "./Components/Footer/Footer";
import Title from "./Components/Title/Title";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import EventGallery from "./Components/EventGallery/EventGallery";
import Gallery from "./Pages/Gallery/Gallery";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <div className="container" style={{ paddingBottom: "100px" }}>
        <FadeInSection>
          <WhatWeDo />
        </FadeInSection>

        <FadeInSection>
          <Title subTitle="" title="GALLERY" />
          <EventGallery />
        </FadeInSection>

        <FadeInSection>
          <Title subTitle="" title="MEET OUR FOUNDERS" />
          <Founders showButton={true} />
        </FadeInSection>

        <FadeInSection>
          <Title subTitle="" title="get in touch" />
          <div id="contact">
            <Contact />
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/it" element={<IT />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
