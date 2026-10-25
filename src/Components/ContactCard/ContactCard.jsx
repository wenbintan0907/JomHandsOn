import React from 'react';
import './ContactCard.css';
import instagram_icon from '../../assets/instagram.svg'
import age_icon from '../../assets/hourglass.svg'
import mbti_icon from '../../assets/people.svg'

const ContactCard = ({
  image,
  name,
  instagram,
  age,
  mbti,
  quote
}) => {
  return (
    <div className="contact-card">
      <div className="contact-card__image">
        <img loading="lazy" decoding="async" src={image} alt={name} />
      </div>

      <div className="contact-card__content">
        <div className="contact-card__name-container">
          <h3 className="contact-card__name">{name}</h3>
        </div>

        {instagram && (
          <a
            href={`https://instagram.com/${instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card__item contact-card__instagram"
          >
            <img loading="lazy" decoding="async" src={instagram_icon} className='icon' alt=''/>
            <span>{instagram}</span>
          </a>
        )}

        <div className="contact-card__item">
        <img loading="lazy" decoding="async" src={age_icon} className='icon' alt=''/>
          <span>{age} years old</span>
        </div>

        <div className="contact-card__item">
          <img loading="lazy" decoding="async" src={mbti_icon} className='icon' alt=''/>
          <span>{mbti}</span>
        </div>

        {quote && (
          <blockquote className="contact-card__quote">
            <p>“{quote}”</p>
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
