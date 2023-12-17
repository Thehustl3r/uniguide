import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
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
            <li><Link to="/home-page">HOME</Link></li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>CONTACT US</li>
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