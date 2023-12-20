import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Button from '../components/Button';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className='section'>
        <div className="sectionW1">
          <div className='sectionText'>
            <div className='text'>
              <p className='txt1'>Discover Your Perfect University Here</p>
              <p className='txt2'>Explore a world of educational opportunities tailored to your preferences and find the ideal academic path that suits your goals. Start your educational journey today!</p>
              <div className='applyBtn'>
              <Link to="/login">
                <Button label="Apply Now" className="applyNowBtn" />
              </Link>
            </div>
            </div>
          </div>
        </div>
        <div className='sectionImage'>
          <img src="/student.png" alt='' />
        </div>
      </div>
      <div className='section1'>
        <div className='grid-container'>
          <div className='text-container'>
            <div className='text'>
              <p className='txt2'>Uncover the story behind UniGuide's educational revolution. Meet the minds shaping a transformative platform. Your academic adventure starts here — ready to explore?</p>
            </div>
            <div className='text'>
              <p className='txt2'>We elevate your education experience as we redefine how African students discover universities. Explore personalized searches, compare institutions, and unveil a world of scholarship opportunities.</p>
            </div>
          </div>
          <div className='button-container'>
            <Button label="Start exploring" className="startExploringBtn" />
          </div>
        </div>
      </div>
  
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
