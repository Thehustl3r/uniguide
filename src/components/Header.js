import React from 'react';
import HeaderCSS from './Header.module.css'
import TextCSS from '../appCSS/appText_css.module.css'
import BoxCSS from '../appCSS/appBox_css.module.css'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-router-dom';


const Header = () => {
  const loginStatus = useSelector(state => state.loginStatus)
  return (
    <header className={HeaderCSS.header}>
      <img src="/ulogo.png" alt="" className={HeaderCSS.logo} />
      <div className={`${HeaderCSS.nav_bar} ${TextCSS.big_text}`}>
        <Link to={'/'}>
          <div>Home</div>
        </Link>
        <Link to={'/about'}>
          <div>About Us</div>
        </Link><Link to={'/schools'}>
          <div>Universities</div>
        </Link><Link to={'/scholarships'}>
          <div>Scholarships</div>
        </Link>
      </div>
      <div className={HeaderCSS.search_box}>
        <input placeholder='Search'></input>
        <IoSearch className={HeaderCSS.icon} />

      </div>
      {!(loginStatus.islogedIn) ?
        <div className={BoxCSS.box}>
          <Link to={'/login'} className={HeaderCSS.login}>LOGIN</Link>
          <Link to={'/signup'} className={HeaderCSS.signup}>SIGNUP</Link>
        </div>
        :
        <div className={HeaderCSS.profileAvatar}>
          {loginStatus.name.toUpperCase()}
        </div>
      }

    </header>
  );
};

export default Header;