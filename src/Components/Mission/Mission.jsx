import React from 'react';
import '../Mission/Mission.css';
import mission_icon from '../../assets/archery.svg';
import vision_icon from '../../assets/lightbulb.svg';

const Mission = () => {
  return (
    <div className="mission_container">
      {/* Product Section */}
      <section className="section">
        <div className="section-header">
          <img loading="lazy" decoding="async" src={mission_icon} alt="" />
          <h2>Mission</h2>
        </div>
        <p className="main-text">Providing a platform for high school students to cultivate Malaysian youth’s interest towards STEM</p>
      </section>

      {/* Product Section */}
      <section className="section">
        <div className="section-header">
          <img loading="lazy" decoding="async" src={vision_icon} alt="" />
          <h2>Vision</h2>
        </div>
        <p className="main-text">Equipping young minds with practical skills and encourage creative thinking when tackling STEM-related challenges in their everyday lives</p>
      </section>
    </div>
  )
}

export default Mission;
