import { useCallback } from "react";
import StartExploring from "../components/StartExploring";
import DiscoverUniversitySection from "../components/DiscoverUniversitySection";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onABOUTUSTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onSERVICESTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onCONTACTUSTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onLOGINTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSIGNUPTextClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className="home-page">
      <div className="container">
        <div className="footer">
          <div className="frame-parent">
            <div className="uniguide-is-your-one-stop-plat-parent">
              <div className="uniguide-is-your">
                UniGuide is your one-stop platform for finding the right
                university globally. We offer personalized searches, detailed
                profiles, and guidance for a seamless application process,
                empowering students to make informed decisions.
              </div>
              <img className="logo-icon" alt="" src="/logo@2x.png" />
            </div>
            <div className="contact-parent">
              <div className="contact">CONTACT</div>
              <img className="call-1-icon" alt="" src="/call-1@2x.png" />
              <div className="div">+250725317338</div>
              <img className="email-1-icon" alt="" src="/email-1@2x.png" />
              <div className="uniguidegmailcom">uniguide@gmail.com</div>
            </div>
            <div className="links-parent">
              <div className="links">LINKS</div>
              <div className="privacy-policy">Privacy policy</div>
              <div className="terms-of-use">Terms of use</div>
            </div>
            <div className="group-container">
              <div className="social-networks-parent">
                <div className="social-networks">SOCIAL NETWORKS</div>
                <div className="fb-parent">
                  <img className="fb-icon" alt="" src="/fb@2x.png" />
                  <img className="linkd-icon" alt="" src="/linkd@2x.png" />
                  <img className="insta-icon" alt="" src="/insta@2x.png" />
                  <div className="uniguide">uniguide</div>
                  <div className="uniguide1">@uniguide</div>
                  <div className="uniguide2">@uniguide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="frame-group">
            <div className="group-frame">
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
            <div className="frame-div">
              <div className="be-informed-parent">
                <div className="be-informed">be informed</div>
                <b className="comprehensive-university-profi">
                  Comprehensive University Profiles
                </b>
                <div className="explore-in-depth-profiles">
                  Explore in-depth profiles of universities, providing detailed
                  information on academic programs, admission requirements,
                  campus life, and more
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
              best universities around the globe. Join a community where
              diversity thrives, knowledge knows no bounds, and your journey to
              academic excellence begins. Your future starts here
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="frame-container">
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
        <DiscoverUniversitySection />
        <header className="header">
          <div className="logo-parent">
            <img
              className="logo-icon1"
              alt=""
              src="/black-white-minimalist-logo--2-removebgpreview-11@2x.png"
            />
            <div className="home-parent">
              <div className="home" onClick={onHOMETextClick}>
                HOME
              </div>
              <div
                className="about-us"
                onClick={onABOUTUSTextClick}
              >{`ABOUT US `}</div>
              <div className="services" onClick={onSERVICESTextClick}>
                SERVICES
              </div>
              <div className="contact-us" onClick={onCONTACTUSTextClick}>
                CONTACT US
              </div>
            </div>
            <div className="login-parent">
              <div className="login" onClick={onLOGINTextClick}>
                LOGIN
              </div>
              <div className="sign-up" onClick={onSIGNUPTextClick}>
                SIGN UP
              </div>
            </div>
            <button className="rectangle-group">
              <div className="group-child" />
              <div className="search">SEARCH</div>
              <img
                className="searc1-removebg-preview-1-icon"
                alt=""
                src="/searc1removebgpreview-1@2x.png"
              />
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HomePage;
