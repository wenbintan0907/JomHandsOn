import React from 'react';
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import siew_hao from '../../assets/IT Dept/Siew Hao Individual Pic.JPG';
import anas from '../../assets/IT Dept/Anas Individual Pic.JPG';
import wenbin from '../../assets/IT Dept/wenbin.JPG';
import amber from '../../assets/Science dept/IMG_0351.JPG'
import srina from '../../assets/Science dept/IMG_0359.JPG'

const IT = () => {
  const teamMembers = [
    {
      image: siew_hao,
      name: "Sarvin",
      instagram: "@siew_hao",
      age: "18",
      mbti: "ENFJ",
      quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
    },
    {
      image: anas,
      name: "Shafeeq",
      instagram: "@anas.dev",
      age: "18",
      mbti: "INTJ",
      quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
    },
    {
      image: wenbin,
      name: "Adam Yoong",
      instagram: "@wenbin",
      age: "18", 
      mbti: "ISTJ", 
      quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
    },
    {
      image: amber,
      name: "Amber Pooi",
      instagram: "@wenbin",
      age: "18", 
      mbti: "ISTJ", 
      quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
    },
    {
      image: srina,
      name: "Srina Vanissha",
      instagram: "@srinavanissha",
      age: "17", 
      mbti: "ENTP", 
      quote: "Don't count the days, make the days count"
    },
    {
      image: wenbin,
      name: "Alyssa Wong",
      instagram: "@srinavanissha",
      age: "17", 
      mbti: "ENTP", 
      quote: "Don't count the days, make the days count"
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