import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="section">
        <div className='title'>
            <p>Start Discovering Your Academic Adventure Now</p>
        </div>
        <div className='content'>
            <p>This is not just a search; it's an invitation to discover and shape your unique academic story. Join us on this thrilling academic adventure, tailored just for you.</p>
        </div>
        <Link to="home-page">
            <Button label="START" className='start-btn'/>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;