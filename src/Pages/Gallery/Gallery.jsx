import React, { useState, useEffect } from 'react';
import Title from '../../Components/Title/Title';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './Gallery.css';

import outreach_1 from '../../assets/makerspace event pics!/DSC02292.webp';
import outreach_2 from '../../assets/makerspace event pics!/DSC02352.webp';
import outreach_3 from '../../assets/makerspace event pics!/DSC02353.webp';
import outreach_4 from '../../assets/makerspace event pics!/DSC02356.webp';
import outreach_5 from '../../assets/makerspace event pics!/DSC02346.webp';
import outreach_6 from '../../assets/makerspace event pics!/DSC02363.webp';
import outreach_7 from '../../assets/makerspace event pics!/DSC02364.webp';
import outreach_8 from '../../assets/makerspace event pics!/DSC02365.webp';
import outreach_9 from '../../assets/makerspace event pics!/DSC02340.webp';
import outreach_10 from '../../assets/makerspace event pics!/DSC02332.webp';
import outreach_11 from '../../assets/makerspace event pics!/DSC02330.webp';
import outreach_12 from '../../assets/makerspace event pics!/DSC02324.webp';
import outreach_13 from '../../assets/makerspace event pics!/DSC02320.webp';
import outreach_14 from '../../assets/makerspace event pics!/DSC02309.webp';
import outreach_15 from '../../assets/makerspace event pics!/DSC02299.webp';
import outreach_16 from '../../assets/makerspace event pics!/DSC02293.webp';
import outreach_18 from '../../assets/makerspace event pics!/DSC02291.webp';
import outreach_19 from '../../assets/makerspace event pics!/DSC02290.webp';

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
    { image: outreach_18, description: "Team Building" },
    { image: outreach_19, description: "Team Building" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const count = galleryImages2025.length;
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      if (!document.hidden) setCurrentIndex(index => (index + 1) % count);
    }, 5000);
    return () => clearInterval(timer);
  }, [playing, count]);
  const move = (direction) => setCurrentIndex(index => (index + direction + count) % count);
  return (
    <div className="container about-page gallery-page">
      <Title subTitle="" title="Makerspace @ 23 November 2024" />
      <section className="slider-container" aria-roledescription="carousel" aria-label="Makerspace photos">
        <button type="button" className="slider-button prev" aria-label="Previous photo" onClick={() => move(-1)}><BsChevronLeft /></button>
        <div className="slider-content">
          <img className="slider-image" src={galleryImages2025[currentIndex].image} alt={`Makerspace STEM workshop, photo ${currentIndex + 1}`} width="1600" height="1067" />
        </div>
        <button type="button" className="slider-button next" aria-label="Next photo" onClick={() => move(1)}><BsChevronRight /></button>
      </section>
      <p className="gallery-caption" aria-live={playing ? 'off' : 'polite'}>Photo {currentIndex + 1} of {count}</p>
      <button type="button" className="btn dark-btn" aria-pressed={playing} onClick={() => setPlaying(!playing)}>{playing ? 'Pause slideshow' : 'Play slideshow'}</button>
    </div>
  );
};
export default Gallery;
