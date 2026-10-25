import React from 'react';
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import aliyah from '../../assets/PUBLICITY_ALIYAH.webp';
import zainul from '../../assets/PUBLICITY_ZAINUL.webp';
import dhiya from '../../assets/PUBLICITYDEPT_DHIYA.webp';

const IT = () => {
  const teamMembers = [
    {
      image: zainul,
      name: "Zainul Hakim",
      instagram: "@zaynollie",
      age: "18",
      mbti: "ENFP",
      quote: "as i was moving ahead occasionally i saw brief glimpses of beauty."
    },
    {
      image: aliyah,
      name: "Aliyah",
      instagram: "@aliyhamin",
      age: "18",
      mbti: "ENFJ",
      quote: "what, like its hard?"
    },
    {
      image: dhiya,
      name: "Dhiya Arissa",
      instagram: "@dyarissaa",
      age: "18",
      mbti: "INTP",
      quote: "I value a peace of mind"
    },
  ];

  return (
    <div className="it-container">
      {teamMembers.map((member, index) => (
        <ContactCard key={index} {...member} />
      ))}
    </div>
  );
};

export default IT;
