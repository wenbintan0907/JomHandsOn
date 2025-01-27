import React from 'react';
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import dilpreet from '../../assets/CHEMDEPT_DILPREET.jpg';
import maryam from '../../assets/CHEMDEPT_MARYAM.jpg';
import amber from '../../assets/Science dept/IMG_0351.JPG'

const IT = () => {
  const teamMembers = [
    {
      image: amber,
      name: "Amber Poi",
      instagram: "@amberpoi",
      age: "18", 
      mbti: "INTP", 
      quote: "You don’t need a reason to do something randomly "
    },
    {
      image: dilpreet,
      name: "Dilpreet Kaur",
      instagram: "@dilpreet_1706",
      age: "18",
      mbti: "ENFJ",
      quote: "Conquer your mind and you will conquer the world "
    },
    {
      image: maryam,
      name: "Maryam",
      instagram: "@mryspov",
      age: "18",
      mbti: "ENTJ",
      quote: "If it scares you but it excites you, that’s when you jump in!",
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