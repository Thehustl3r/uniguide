import React from 'react';
import { Link } from 'react-router-dom';
import HomePageCSS from './HomePage.module.css';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppTextCSS from '../appCSS/appText_css.module.css'
import {SlidingViewForSchool, SlidingViewForScholarship} from '../components/sliding_view';
import CountryList from '../components/country_list';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchool } from '../redux/schoolReducer/schoolSlice';
import { fetchCountries } from '../redux/locationReducer/countrySlice';
import { fetchScholarship } from '../redux/scholarshipReducer/scholarshipSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  

  dispatch(fetchSchool());
  dispatch(fetchCountries());
  dispatch(fetchScholarship());

  return (
    <div className={HomePageCSS.homePage}>
      <Header />

      <div className={HomePageCSS.section}>
        <div className={HomePageCSS.sectionW1}>
          <div className={HomePageCSS.sectionText}>
            <div className={HomePageCSS.landingPage_text}>
              <h1>Discover Your Perfect University Here</h1>
              <p >Explore a world of educational opportunities tailored to your preferences and find the ideal academic path that suits your goals. Start your educational journey today!</p>
              <div className={HomePageCSS.applyBtn}>
                <Link to="/login">
                  <Button label="Apply Now" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="/student.png" alt='' className={HomePageCSS.landingPage_image} />
      </div>
      {/* <div className='section1'>
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
      </div> */}
      <div className={HomePageCSS.statics}>
        <div>
          <h1 className={AppTextCSS.largeText}>300+</h1>
          <p>Universities</p>
        </div>
        <div>
          <h1 className={AppTextCSS.largeText}>300+</h1>
          <p>Scholarships</p>
        </div>
      </div>
      <SlidingViewForSchool
        title={'Popular Univesity'}
      />
      <SlidingViewForScholarship
        title={'Treding Scholarship'}


      />
      <div className={HomePageCSS.schoolList}>
        <h2 className={AppTextCSS.bigText}>Choose from countries</h2>
        <CountryList />
      </div>



      <Footer />
    </div>
  );
};

export default HomePage;
