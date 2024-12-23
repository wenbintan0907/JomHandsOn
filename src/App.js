// src/App.js

import React, { useRef } from "react";
import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

const App = () => {
  const eventsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to specific section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header onEventsClick={() => scrollToSection(eventsRef)} onContactClick={() => scrollToSection(contactRef)} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <section ref={eventsRef}>
                  <Events />
                </section>
                <section ref={contactRef}>
                  <Contact />
                </section>
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;