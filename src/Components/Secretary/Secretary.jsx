import React from 'react';
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import serene from '../../assets/SECRETARY_SERENE.webp';
import verness from '../../assets/verness.jpeg';
import mani from '../../assets/Secretary and Outreach/mani.webp'

const IT = () => {
  const teamMembers = [
    {
      image: serene,
      name: "Serene Inulia Kong",
      instagram: "@serenekong6",
      age: "16",
      mbti: "INTP",
      quote: "When life shuts a door, open it back. That’s how doors work."
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
      image: verness,
      name: "Muhammad Harith",
      instagram: "@har_1k1",
      age: "18",
      mbti: "INTJ",
      quote: "The original is unfaithful to the translation."
    },
    {
      image: verness,
      name: "Verness Chia",
      instagram: "@vernessc57",
      age: "18",
      mbti: "ENFP",
      quote: "Keep a single spark to start a prairie fire."
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
