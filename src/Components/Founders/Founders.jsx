import React from 'react'
import { Link } from 'react-router-dom'
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import jun_heng from '../../assets/Founders/Jun Heng.jpg';
import anas from '../../assets/IT Dept/Anas Individual Pic.JPG';
import wenbin from '../../assets/IT Dept/wenbin.JPG';
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Founders = ({ showButton = true }) => {
  const teamMembers = [
      {
        image: jun_heng,
        name: "Chai Jun Heng",
        instagram: "@bro.heng.chai.16",
        age: "19",
        mbti: "ENFJ",
        quote: "Creativity is intelligence having fun"
      },
      {
        image: anas,
        name: "Aber Ju Jing Kui",
        instagram: "@abnerj23",
        age: "19",
        mbti: "ENTP",
        quote: "Theory is when you know everything but nothing works. Practice is when everything works but no one knows why. Here, theory and practice are combined: nothing works and no one knows why"
      },
      {
        image: wenbin,
        name: "Jordan Lee Fur Yuan",
        instagram: "@wenbin",
        age: "18", 
        mbti: "ISTJ", 
        quote: "Stay curious, dream big, and believe your imagination can actually make an impact"
      },
      {
        image: wenbin,
        name: "Yeoh Sheng Ze",
        instagram: "@i_am_not_shengze",
        age: "18", 
        mbti: "ISTP", 
        quote: "It starts with human knowing, then it turns into human doing and finally human being"
      },
    ];

  return (
    <div className="it-container">
      {teamMembers.map((member, index) => (
        <ContactCard key={index} {...member} />
      ))}
    </div>
  );
    {showButton && (
      <Link to="/about">
        <button className="btn dark-btn">Our Team <img src={white_arrow} alt="arrow"/></button>
      </Link>
    )}
}

export default Founders