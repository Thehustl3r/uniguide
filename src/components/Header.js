import React from 'react';
import HeaderCSS from './Header.module.css'
import TextCSS from '../appCSS/appText_css.module.css'
import BoxCSS from '../appCSS/appBox_css.module.css'
import { IoSearch } from "react-icons/io5";
// import { Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={HeaderCSS.header}>
      <>
        <img src="/ulogo.png" alt="" className={HeaderCSS.logo} />
        <div className={`${HeaderCSS.nav_bar} ${TextCSS.big_text}`}>
          <div>Home</div>
          <div>About Us</div>
          <div>Universities</div>
          <div>Scholarship</div>
        </div>
      </>
      <>
      <div className={HeaderCSS.search_box}>
      <input placeholder='Search'></input>
      <IoSearch className={HeaderCSS.icon}/>
      
      </div>
        
        <div className={BoxCSS.box}>
          <div className={HeaderCSS.login}>LOGIN</div>
          <div className={HeaderCSS.signup}>SIGNUP</div>
        </div>
      </>
    </header>
  );
};

export default Header;