import React from 'react';
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import radhi from '../../assets/BIOLOGYDEPT_RADHI.webp';
import fahim from '../../assets/BIODEPT_FAHIM.webp';
import srina from '../../assets/BIODEPT_SRINA.webp'

const IT = () => {
  const teamMembers = [
    {
      image: srina,
      name: "Srina",
      instagram: "@srinavanissha",
      age: "17",
      mbti: "ENTP",
      quote: "Don't count the days, make the days count",
    },
    {
      image: srina,
      name: "Alyssa Wong",
      instagram: "@",
      age: "",
      mbti: "",
      quote: ""
    },
    {
      image: radhi,
      name: "Radhi",
      instagram: "@radi.fdl",
      age: "16",
      mbti: "ISFJ",
      quote: "There are lots of brilliant women in every corner of the world. Unfortunately, the world is round",
    },
    {
      image: fahim,
      name: "Ridhwan Fahim",
      instagram: "@rdhwnfahim",
      age: "18",
      mbti: "ENFJ",
      quote: "I see it, I like it, I want it, I got it",
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
