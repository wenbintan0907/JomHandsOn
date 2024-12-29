import React from 'react';
import Contact from '../../Components/Contact/Contact';
import Title from '../../Components/Title/Title';

const ContactPage = () => {
  return (
    <div className="page">
        <div className="container" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <Title subTitle='' title='get in touch' />
        <Contact />
        </div>
    </div>
  );
}

export default ContactPage;