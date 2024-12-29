import React from 'react';
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import siew_hao from '../../assets/IT Dept/Siew Hao Individual Pic.JPG';
import anas from '../../assets/IT Dept/Anas Individual Pic.JPG';
import wenbin from '../../assets/IT Dept/wenbin.JPG';

const IT = () => {
  const teamMembers = [
    {
      image: siew_hao,
      name: "Zainul Hakim",
      instagram: "@zaynollie",
      age: "18",
      mbti: "ENFJ",
      quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
    },
    {
      image: anas,
      name: "Aliyah",
      instagram: "@aliyhamin",
      age: "18",
      mbti: "ENFJ",
      quote: "what, like its hard?"
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