import { useCallback } from "react";
import StartExploring from "../components/StartExploring";
import ApplyNow from "../components/ApplyNow";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onABOUTUSTextClick = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  const onSERVICESTextClick = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onCONTACTUSTextClick = useCallback(() => {
    // Please sync "Contact Us" to the project
  }, []);

  const onLOGINTextClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onSIGNUPTextClick = useCallback(() => {
    // Please sync "Sign Up" to the project
  }, []);

  return (
    <div className="home-page">
      <div className="section5">
        <div className="instagram-parent">
          <img className="instagram-icon" alt="" src="/fot03-1@2x.png" />
          <img className="twitter-icon" alt="" src="/ezgif-1@2x.png" />
          <img className="facebook-icon" alt="" src="/foto8-1@2x.png" />
        </div>
      </div>
      <div className="section4">
        <div className="frame-parent">
          <div className="group-wrapper">
            <div className="embark-your-journey-parent">
              <div className="embark-your-journey">embark your journey</div>
              <div className="receive-personalized-universit">
                Receive personalized university recommendations based on your
                academic interests, preferences, and future goals
              </div>
              <b className="personalized-recommendations">
                Personalized Recommendations
              </b>
            </div>
          </div>
          <div className="frame7">
            <div className="make-decisions-parent">
              <div className="make-decisions">make decisions</div>
              <div className="hear-from-real">{`Hear from real students! Read and contribute to reviews about universities, sharing insights and overall student experience. `}</div>
              <b className="student-reviews">Student Reviews</b>
            </div>
          </div>
          <div className="group-container">
            <div className="be-informed-parent">
              <div className="be-informed">be informed</div>
              <b className="comprehensive-university-profi">
                Comprehensive University Profiles
              </b>
              <div className="explore-in-depth-profiles">
                Explore in-depth profiles of universities, providing detailed
                information on academic programs, admission requirements, campus
                life, and more
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="graduate-parent">
          <img className="graduate-icon" alt="" src="/graduate@2x.png" />
          <div className="start-preparing-your">
            Start preparing your future today
          </div>
          <div className="embark-on-a">
            Embark on a global academic adventure with UniGuide. Our platform
            opens doors to a world of possibilities, connecting you with the
            best universities around the globe. Join a community where diversity
            thrives, knowledge knows no bounds, and your journey to academic
            excellence begins. Your future starts here
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="frame-group">
          <StartExploring startExploring="Start exploring " />
          <div className="we-elevate-your">
            We elevate your education experience as we redefine how African
            students discover universities. Explore personalized searches,
            compare institutions, and unveil a world of scholarship
            opportunities.
          </div>
          <div className="uncover-the-story-container">
            <p className="uncover-the-story">
              Uncover the story behind UniGuide's educational revolution. Meet
              the minds shaping a transformative platform. Your academic
              adventure starts here — ready to explore?
            </p>
            <p className="blank-line">&nbsp;</p>
          </div>
        </div>
      </div>
      <main className="section1">
        <div className="frame-container">
          <img className="group-child" alt="" src="/group-23@2x.png" />
          <div className="discover-your-perfect-universi-parent">
            <div className="discover-your-perfect">
              Discover Your Perfect University Here
            </div>
            <div className="explore-a-world">
              Explore a world of educational opportunities tailored to your
              preferences and find the ideal academic path that suits your
              goals. Start your educational journey today!
            </div>
            <ApplyNow applyNow=" Apply Now" />
          </div>
        </div>
      </main>
      <header className="home-page-inner">
        <div className="black-white-minimalist-logo-2-parent">
          <img
            className="black-white-minimalist-logo-2-icon1"
            alt=""
            src="/black-white-minimalist-logo--2-removebgpreview-11@2x.png"
          />
          <div className="home-group">
            <div className="home1" onClick={onHOMETextClick}>
              HOME
            </div>
            <div
              className="about-us1"
              onClick={onABOUTUSTextClick}
            >{`ABOUT US `}</div>
            <div className="services1" onClick={onSERVICESTextClick}>
              SERVICES
            </div>
            <div className="contact-us1" onClick={onCONTACTUSTextClick}>
              CONTACT US
            </div>
          </div>
          <div className="login-group">
            <div className="login1" onClick={onLOGINTextClick}>
              LOGIN
            </div>
            <div className="sign-up1" onClick={onSIGNUPTextClick}>
              SIGN UP
            </div>
          </div>
          <button className="rectangle-parent">
            <div className="group-item" />
            <div className="search1">SEARCH</div>
            <img
              className="searc1-removebg-preview-1-icon1"
              alt=""
              src="/searc1removebgpreview-1@2x.png"
            />
          </button>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
