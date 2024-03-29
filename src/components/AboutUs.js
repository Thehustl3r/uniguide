import React from 'react';
import { Element } from 'react-scroll';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <Element name='AboutUs'>
      <div className="about-us">
      <h3>About Us</h3>
      <div className="content">
        <img src='uabout.png' alt='' />

        <p>
          Welcome to UniGuide, a dynamic hub where education transforms into empowerment.
          Our dedicated team is on a mission to redefine the
          educational journey for African students, paving the
          way for a brighter future through higher education.
        </p>
      </div>
    </div>
    </Element>
  );
};

export default AboutUs;
