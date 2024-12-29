import React from 'react';
import './EventGallery.css';
import event_1 from '../../assets/makerspace event pics!/IMG_8649.JPG'

const EventGallery = () => {
  const event = {
    title: "Lorem Ipsum",
    date: "December 15, 2023",
    description: "Lorem Ipsum",
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
    </section>
  );
};

export default EventGallery;