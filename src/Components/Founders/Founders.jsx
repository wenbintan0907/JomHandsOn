import React from 'react'
import { Link } from 'react-router-dom'
import '../IT/IT.css'
import ContactCard from '../ContactCard/ContactCard';
import jun_heng from '../../assets/Founders/Jun Heng.jpg';
import anas from '../../assets/IT Dept/Anas Individual Pic.JPG';
import jordan from '../../assets/COFOUNDER_JORDANLEE.HEIC';
import sheng_ze from '../../assets/COFOUNDER_YEOHSHENGZE.jpeg'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Founders = ({ showButton = true }) => {
  const teamMembers = [
      {
        image: jun_heng,
        name: "Chai Jun Heng",
        instagram: "@bro.heng.chai.16",
        age: "19",
        mbti: "ENFJ",
        quote: "Being a human without a dream, what’s the difference between you and a salted fish?"
      },
      {
        image: anas,
        name: "Abner Ju Jing Kui",
        instagram: "@abnerj23",
        age: "19",
        mbti: "ENTP",
        quote: "Theory is when you know everything but nothing works. Practice is when everything works but no one knows why. Here, theory and practice are combined: nothing works and no one knows why"
      },
      {
        image: jordan,
        name: "Jordan Lee Fur Yuan",
        instagram: "@jordan_lfy",
        age: "18", 
        mbti: "ENFP", 
        quote: "Picasso said ,“it took me a lifetime to paint like a child.” Be that child with endless imagination, ideas, and creativity ; think like an innocent child, and view the world from fresh perspectives without that fear. All in all, stay young kids."
      },
      {
        image: sheng_ze,
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