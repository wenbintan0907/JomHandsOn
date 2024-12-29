import React from 'react';
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import siew_hao from '../../assets/IT Dept/Siew Hao Individual Pic.JPG';
import wenbin from '../../assets/IT Dept/wenbin.JPG';
import mani from '../../assets/Secretary and Outreach/mani.jpg'

const IT = () => {
  const teamMembers = [
    {
      image: siew_hao,
      name: "Serene Inulia Kong",
      instagram: "@siew_hao",
      age: "18",
      mbti: "ENFJ",
      quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
    },
    {
      image: mani,
      name: "Nesamani Victor",
      instagram: "@nesamanivictor",
      age: "18",
      mbti: "ENFJ",
      quote: "Always say yes to opportunities. You never know if you never try."
    },
    {
      image: wenbin,
      name: "Muhammad Harith",
      instagram: "@wenbin",
      age: "18", 
      mbti: "ISTJ", 
      quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
    },
    {
      image: wenbin,
      name: "Verness Chia",
      instagram: "@wenbin",
      age: "18", 
      mbti: "ENFP", 
      quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
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