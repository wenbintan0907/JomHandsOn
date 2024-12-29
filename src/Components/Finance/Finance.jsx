import React from 'react';
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import siew_hao from '../../assets/IT Dept/Siew Hao Individual Pic.JPG';
import anas from '../../assets/IT Dept/Anas Individual Pic.JPG';
import wenbin from '../../assets/IT Dept/wenbin.JPG';

const IT = () => {
  const teamMembers = [
    {
      image: anas,
      name: "Irdina",
      instagram: "@persimmoniy",
      age: "18",
      mbti: "ENTJ",
      quote: "not really into anything unless the outcome is income"
    },
    {
      image: anas,
      name: "Wafa",
      instagram: "@wawajefry",
      age: "18",
      mbti: "INTJ",
      quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
    },
    {
      image: wenbin,
      name: "Sunita",
      instagram: "@s.unita_k",
      age: "16", 
      mbti: "ISTJ", 
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