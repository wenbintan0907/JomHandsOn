import React from 'react';
import './EventGallery.css';
import event_1 from '../../assets/makerspace event pics!/IMG_8649.JPG'
import white_arrow from '../../assets/edusity_assets/white-arrow.png';
import { Link } from 'react-router-dom';

const EventGallery = () => {
  const event = {
    title: "Makerspace!",
    date: "December 15, 2023",
    image: ""
  };

  return (
    <section className="event-section">
      <div className="event-card">
        <div className="event-image-container">
          <img 
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
      <Link to="/gallery">
        <button className="btn dark-btn">
          View All Events <img src={white_arrow} alt="arrow" />
        </button>
      </Link>
    </section>
  );
};

export default EventGallery;