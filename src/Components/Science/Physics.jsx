import React from 'react';
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import sarvin from '../../assets/PHYSICSDEPT_SARVINTIRRAN.jpg';
import harresh from '../../assets/PHYSICSDEPT _HARRESH.jpg';
import adam from '../../assets/PHYSICSDEPT_ADAM.jpg'

const IT = () => {
  const teamMembers = [
    {
      image: sarvin,
      name: "Sarvintirran",
      instagram: "@sarvin_tirran",
      age: "18", 
      mbti: "INTJ", 
      quote: "Greatness pulls mediocrity into the mud. Get out there and get after it."
    },
    {
      image: sarvin,
      name: "Shafeeq",
      instagram: "",
      age: "",
      mbti: "",
      quote: ""
    },
    {
      image: adam,
      name: "Adam Yoong",
      instagram: "@aywhyhehe",
      age: "18",
      mbti: "INTJ",
      quote: "Always strive to be better than who you were yesterday"
    },
    {
      image: harresh,
      name: "Harresh",
      instagram: "@harresh40",
      age: "18",
      mbti: "ISFP",
      quote: "The first principle is that you must not fool yourself and you are the easiest person to fool",
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