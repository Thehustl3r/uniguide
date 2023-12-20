import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-router-dom';
import Button from '../components/Button';

const Header = () => {
  return (
    <header className="header">
      <div className='logo'>
        <img src="/ulogo.png" alt="" />
      </div>
      <div className='nav-section'>
        <nav className="nav-list">
          <ul>
            <li>HOME</li>
            <li><ScrollLink to="AboutUs" smooth={true} duration={500}>ABOUT</ScrollLink></li>
            <li><ScrollLink to="Services" smooth={true} duration={500}>SERVICES</ScrollLink></li>
            <li><ScrollLink to="ContactUs" smooth={true} duration={500}>CONTACT US</ScrollLink></li>
          </ul>
        </nav>
      </div>
      <nav>
        <Button label="SEARCH" />
      </nav>
      <div className='nav-section'>
        <nav className="nav-list">
          <ul>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/signup">SIGNUP</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;