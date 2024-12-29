import React from 'react';
import './WhatWeDo.css';
import { Link } from 'react-router-dom'
import team_img from '../../assets/Team1.JPG';
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const WhatWeDo = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={team_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h2>What Do We Do?</h2>
        <p>We host STEM based events in neighbourhood communities, carry out outreach to schools to teach young Malaysians the wonders of science through our hands-on experiments.</p>
        <p>Our makerspace event focuses on letting students conduct these experiments with our guidance to allow first hand learning and also enhance their lab skills. With this, we strongly believe we can achieve our mission from one hand to the next!</p>
        <Link to="/about">
          <button className="btn dark-btn">Our Team <img src={white_arrow} alt="arrow"/></button>
        </Link>
      </div>
    </div>
  );
}

export default WhatWeDo;