import React from 'react';
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import wawa from '../../assets/FINANCE_WAWA.png';
import sunita from '../../assets/FUNDING_SUNITA.jpg';
import irdina from '../../assets/Iman_ funding.jpg';

const IT = () => {
  const teamMembers = [
    {
      image: irdina,
      name: "Iman Irdina",
      instagram: "@persimmoniy",
      age: "18",
      mbti: "ENTJ",
      quote: "not really into anything unless the outcome is income"
    },
    {
      image: wawa,
      name: "Wafa’ Amni",
      instagram: "@wawajefry",
      age: "18",
      mbti: "ENFP",
      quote: "Practice gratitude, always"
    },
    {
      image: sunita,
      name: "Sunita Khanijow",
      instagram: "@s.unita_k",
      age: "16", 
      mbti: "", 
      quote: "at the end of the day, its night"
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