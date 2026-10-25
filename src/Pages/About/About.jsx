import React from 'react';
import FadeInSection from '../../Components/FadeInSection/FadeInSection';
import './About.css';
import Founders from '../../Components/Founders/Founders';
import IT from '../../Components/IT/IT';
import Title from '../../Components/Title/Title';
import Mission from '../../Components/Mission/Mission';
import Finance from '../../Components/Finance/Finance';
import Chemistry from '../../Components/Science/Chemistry';
import Physics from '../../Components/Science/Physics';
import Biology from '../../Components/Science/Biology';
import Publicity from '../../Components/Publicity/Publicity';
import Secretary from '../../Components/Secretary/Secretary';
import team_img from '../../assets/Team1.webp'

const About = () => {
  return (
    <div className="container about-page">
      <FadeInSection>
        <Title subTitle='' title="OUR TEAM"></Title>
        <img loading="lazy" decoding="async" src={team_img} className='team_banner' alt=''/>
      </FadeInSection>
      <FadeInSection>
        <Title subTitle='' title="MISSION AND VISION"></Title>
        <Mission />
      </FadeInSection>
      <FadeInSection>
        <Title subTitle='' title='FOUNDERS'></Title>
        <Founders showButton={false}/>
      </FadeInSection>
      <FadeInSection>
        <Title subTitle='' title='IT Department'></Title>
        <IT />
      </FadeInSection>
      <FadeInSection>
        <Title subTitle='' title='Finance Department'></Title>
        <Finance />
      </FadeInSection>
      <FadeInSection>
        <Title subTitle='' title='Chemistry Department'></Title>
        <Chemistry />
      </FadeInSection>
      <FadeInSection>
        <Title subTitle='' title='Physics Department'></Title>
        <Physics />
      </FadeInSection>
      <FadeInSection>
        <Title subTitle='' title='Biology Department'></Title>
        <Biology />
      </FadeInSection>
      <FadeInSection>
        <Title subTitle='' title='Publicity Department'></Title>
        <Publicity />
      </FadeInSection>
      <FadeInSection>
        <Title subTitle='' title='Secretary & Outreach'></Title>
        <Secretary />
      </FadeInSection>
    </div>
  );
}

export default About;
