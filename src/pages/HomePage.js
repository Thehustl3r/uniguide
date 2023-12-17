import React from 'react';
import { Link } from 'react-router-dom'
import './HomePage.css';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  /*const handleLoginClick = () => {
    console.log('Login clicked');
  }*/

  return (
    <div className="home-page">
      <Header />
      <div className="sections">
        <div className="section1">
          <div className="paragraphs">
            <p className='txt1'>Discover  Your Perfect University Here</p>
            <p className='txt2'>Explore a world of educational opportunities tailored to your preferences and find the ideal academic path that suits your goals. Start your educational journey today!</p>
          </div>
          <div className="image-student">
            <img src="/student.png" alt=""/>
          </div>
        </div>
        <Link to="/login">
          <Button label="Apply Now" className="apply-now-btn"/>
        </Link>
        <div className='section2'>
          <div className="paragraph-1">
              <p className="paragraph">Uncover the story behind UniGuide's educational revolution. Meet the minds shaping a transformative platform. Your academic adventure starts here — ready to explore?</p>
          </div>
          <div className="paragraph-2">
              <p className="paragraph">We elevate your education experience as we redefine how African students discover universities. Explore personalized searches, compare institutions, and unveil a world of scholarship opportunities.</p>
          </div>
          <div className='image-grad'>
            <img src='_.jpeg' alt='' />
          </div>
        </div>
        <Button label="Start exploring" className="start-exploring-btn"/>
        <div className='section-wrapper2'>
        <div className="section3">
          <div className="section3-text1">
            <h3>Personalized Recommendations</h3>
            <p>Receive personalized university recommendations based on your academic interests, preferences, and future goals</p>
            <p><u>embark your journey</u></p>
          </div>
          <div className="section3-text2">
            <h3>Comprehensive University Profiles</h3>
            <p>Explore in-depth profiles of universities, providing detailed information on academic programs, admission requirements, campus life, and more</p>
            <p><u>be informed</u></p>
          </div>
          <div className="section3-text3">
            <h3>Student Reviews</h3>
            <p>Hear from real students! Read and contribute to reviews about universities, sharing insights and overall student experience.</p>
            <p><u>make decisions</u></p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
