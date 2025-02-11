import React, { useState, useEffect } from 'react';
import FadeInSection from '../../Components/FadeInSection/FadeInSection';
import Title from '../../Components/Title/Title';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './Gallery.css';

import outreach_1 from '../../assets/makerspace event pics!/DSC02292.JPG';
import outreach_2 from '../../assets/makerspace event pics!/DSC02352.JPG';
import outreach_3 from '../../assets/makerspace event pics!/DSC02353.JPG';
import outreach_4 from '../../assets/makerspace event pics!/DSC02356.JPG';
import outreach_5 from '../../assets/makerspace event pics!/DSC02346.JPG';
import outreach_6 from '../../assets/makerspace event pics!/DSC02363.JPG';
import outreach_7 from '../../assets/makerspace event pics!/DSC02364.JPG';
import outreach_8 from '../../assets/makerspace event pics!/DSC02365.JPG';
import outreach_9 from '../../assets/makerspace event pics!/DSC02340.JPG';
import outreach_10 from '../../assets/makerspace event pics!/DSC02332.JPG';
import outreach_11 from '../../assets/makerspace event pics!/DSC02330.JPG';
import outreach_12 from '../../assets/makerspace event pics!/DSC02324.JPG';
import outreach_13 from '../../assets/makerspace event pics!/DSC02320.JPG';
import outreach_14 from '../../assets/makerspace event pics!/DSC02309.JPG';
import outreach_15 from '../../assets/makerspace event pics!/DSC02299.JPG';
import outreach_16 from '../../assets/makerspace event pics!/DSC02293.JPG';
import outreach_17 from '../../assets/makerspace event pics!/DSC02292.JPG';
import outreach_18 from '../../assets/makerspace event pics!/DSC02291.JPG';
import outreach_19 from '../../assets/makerspace event pics!/DSC02290.JPG';

const Gallery = () => {
  // Your actual gallery images array
  const galleryImages2025 = [
    { image: outreach_1, description: "Event 2025" },
    { image: outreach_2, description: "Community Outreach" },
    { image: outreach_3, description: "Team Building" },
    { image: outreach_4, description: "Team Building" },
    { image: outreach_5, description: "Team Building" },
    { image: outreach_6, description: "Team Building" },
    { image: outreach_7, description: "Team Building" },
    { image: outreach_8, description: "Team Building" },
    { image: outreach_9, description: "Team Building" },
    { image: outreach_10, description: "Team Building" },
    { image: outreach_11, description: "Team Building" },
    { image: outreach_12, description: "Team Building" },
    { image: outreach_13, description: "Team Building" },
    { image: outreach_14, description: "Team Building" },
    { image: outreach_15, description: "Team Building" },
    { image: outreach_16, description: "Team Building" },
    { image: outreach_17, description: "Team Building" },
    { image: outreach_18, description: "Team Building" },
    { image: outreach_19, description: "Team Building" },
  ];

  // Create a slides array that clones the last slide at the beginning and the first slide at the end.
  const slides = [
    galleryImages2025[galleryImages2025.length - 1],
    ...galleryImages2025,
    galleryImages2025[0],
  ];

  // Start with index 1 (the first actual slide)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const transitionDuration = 500; // in milliseconds

  // Auto-slide every 5 seconds (if not animating)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev - 1);
  };

  // When the transition ends, check for a clone slide and "jump" without animation.
  const handleTransitionEnd = () => {
    if (currentIndex === slides.length - 1) {
      // Reached the clone of the first slide.
      setTransitionEnabled(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Reached the clone of the last slide.
      setTransitionEnabled(false);
      setCurrentIndex(slides.length - 2);
    }
    // Force a reflow to ensure the jump applies immediately.
    const slider = document.querySelector('.slider-images');
    if (slider) {
      slider.offsetWidth; // reading offsetWidth forces reflow
    }
    // Re-enable the transition after a short delay.
    setTimeout(() => {
      setTransitionEnabled(true);
      setIsAnimating(false);
    }, 50);
  };

  // Compute the caption so that clones display the correct text.
  const getCurrentCaption = () => {
    if (currentIndex === 0) return slides[slides.length - 2].description;
    if (currentIndex === slides.length - 1) return slides[1].description;
    return slides[currentIndex].description;
  };

  return (
    <div className="container about-page">
      <FadeInSection>
        <Title subTitle="" title="Makerspace @ 23 November 2024" />
        <div className="slider-container">
          <button className="slider-button prev" onClick={handlePrev}>
            <BsChevronLeft />
          </button>
          <div className="slider-content">
            <div
              className="slider-images"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: transitionEnabled
                  ? `transform ${transitionDuration}ms ease-in-out`
                  : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((item, index) => (
                <div key={index} className="slider-image-container">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="slider-image"
                  />
                </div>
              ))}
            </div>
            <div className="slider-caption">
              <h3 className="event-title">{getCurrentCaption()}</h3>
            </div>
          </div>
          <button className="slider-button next" onClick={handleNext}>
            <BsChevronRight />
          </button>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Gallery;