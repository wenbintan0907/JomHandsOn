import React from 'react';
import './IT.css';
import ContactCard from '../ContactCard/ContactCard';
import siew_hao from '../../assets/IT Dept/Siew Hao Individual Pic.JPG';
import anas from '../../assets/IT Dept/Anas Individual Pic.JPG';
import wenbin from '../../assets/IT Dept/wenbin.JPG';

const IT = () => {
  const teamMembers = [
    {
      image: siew_hao,
      name: "Yiek Siew Hao",
      instagram: "@siew_hao",
      age: "18",
      mbti: "ENFJ",
      quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
    },
    {
      image: anas,
      name: "Anas",
      instagram: "@anas.dev",
      age: "18",
      mbti: "INTJ",
      quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
    },
    {
      image: wenbin,
      name: "Tan Wen Bin",
      instagram: "@tanwenbin0709",
      age: "18", 
      mbti: "ISTJ", 
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