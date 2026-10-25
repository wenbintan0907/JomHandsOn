import React from 'react';
import './EventGallery.css';
import event_1 from '../../assets/makerspace event pics!/IMG_8649.webp'
import white_arrow from '../../assets/edusity_assets/white-arrow.png';
import { Link } from 'react-router-dom';

const EventGallery = () => {
  const event = {
    title: "Makerspace!",
    date: "November 23, 2024",
    description: "Hands-on STEM learning at our Makerspace event."
  };

  return (
    <section className="event-section">
      <div className="event-card">
        <div className="event-image-container">
          <img loading="lazy" decoding="async"
            src={event_1}
            alt={event.title}
            className="event-image"
          />
          <div className="event-date">{event.date}</div>
        </div>
        <div className="event-content">
          <h3 className="event-title">{event.title}</h3>
          <p className="event-description">{event.description}</p>
        </div>
      </div>
      {/* Add the button */}
      <Link to="/gallery" className="btn dark-btn">

          View All Events <img loading="lazy" decoding="async" src={white_arrow} alt="arrow" />

      </Link>
    </section>
  );
};

export default EventGallery;
