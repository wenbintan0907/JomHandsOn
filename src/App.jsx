import React, { useLayoutEffect, lazy, Suspense } from 'react';
import { scrollToDestination } from './utils/navigation';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import FadeInSection from './Components/FadeInSection/FadeInSection';
import Hero from './Components/Hero/Hero';
const About = lazy(() => import('./Pages/About/About.jsx'));
import Founders from './Components/Founders/Founders';
const IT = lazy(() => import('./Components/IT/IT.jsx'));
import Contact from './Components/Contact/Contact';
const ContactPage = lazy(() => import('./Pages/Contact/ContactPage.jsx'));
import Footer from './Components/Footer/Footer';
import Title from './Components/Title/Title';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import EventGallery from './Components/EventGallery/EventGallery';
const Gallery = lazy(() => import('./Pages/Gallery/Gallery.jsx'));

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  useLayoutEffect(() => {
    scrollToDestination(hash);
  }, [pathname, hash, key]);

  return null;
}

const HomePage = () => {
  return (
    <>
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <div className="container" style={{ paddingBottom: '100px' }}>
        <FadeInSection>
          <WhatWeDo />
        </FadeInSection>

        <FadeInSection>
          <Title subTitle='' title='GALLERY' />
          <EventGallery/>
        </FadeInSection>

        <FadeInSection>
          <Title subTitle='' title='MEET OUR FOUNDERS' />
          <Founders showButton={true} />
        </FadeInSection>

        <section id="contact">
          <FadeInSection>
            <Title subTitle='' title='get in touch' />
            <Contact />
          </FadeInSection>
        </section>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <a className="skip-link" href="#main-content">Skip to content</a><Navbar />
        <main id="main-content"><Suspense fallback={<p className="route-loading" role="status">Loading…</p>}><ScrollToTop /><Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={
            <FadeInSection>
              <About />
            </FadeInSection>
          } />
          <Route path="/gallery" element={
            <FadeInSection>
              <Gallery />
            </FadeInSection>
          } />
          <Route path="/founders" element={
            <FadeInSection>
              <div className="container about-page"><Founders showButton={false} /></div>
            </FadeInSection>
          } />
          <Route path="/it" element={
            <FadeInSection>
              <div className="container about-page"><IT /></div>
            </FadeInSection>
          } />
          <Route path="/contact" element={
            <FadeInSection>
              <ContactPage />
            </FadeInSection>
          } />
        <Route path="*" element={<div className="container about-page"><h1>Page not found</h1><a href="/">Return home</a></div>} /></Routes></Suspense></main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
