import { useCallback } from "react";
import StartButton from "../components/StartButton";
import "./LandingPage.css";

const LandingPage = () => {
  const onABOUTUSTextClick = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  return (
    <div className="landing-page">
      <img className="foto6-1-icon" alt="" src="/foto6-1@2x.png" />
      <img
        className="black-white-minimalist-logo-2-icon"
        alt=""
        src="/black-white-minimalist-logo--2-removebgpreview-1@2x.png"
      />
      <div className="start-discovering-your">
        Start Discovering Your Academic Adventure Now
      </div>
      <div className="this-is-not">
        This is not just a search; it's an invitation to discover and shape your
        unique academic story. Join us on this thrilling academic adventure,
        tailored just for you.
      </div>
      <div className="home-parent">
        <div className="home">HOME</div>
        <div
          className="about-us"
          onClick={onABOUTUSTextClick}
        >{`ABOUT US `}</div>
        <div className="services">SERVICES</div>
        <div className="contact-us">CONTACT US</div>
      </div>
      <div className="login-parent">
        <div className="login">LOGIN</div>
        <div className="sign-up">SIGN UP</div>
      </div>
      <div className="landing-page-child" />
      <div className="search">SEARCH</div>
      <img
        className="searc1-removebg-preview-1-icon"
        alt=""
        src="/searc1removebgpreview-1@2x.png"
      />
      <div className="landing-page-inner">
        <StartButton />
      </div>
      <div className="start">START</div>
      <div className="ezgif-1-parent">
        <img className="ezgif-1-icon" alt="" src="/ezgif-1@2x.png" />
        <img className="fot03-1-icon" alt="" src="/fot03-1@2x.png" />
        <img className="foto8-1-icon" alt="" src="/foto8-1@2x.png" />
      </div>
    </div>
  );
};

export default LandingPage;
