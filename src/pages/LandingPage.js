import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import StartButton from "../components/StartButton";
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
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
    <div className="landing-page">
      <Header
        headerFlexShrink="0"
        headerPosition="unset"
        headerTop="unset"
        headerLeft="unset"
        onHOMETextClick={onHOMETextClick}
        onABOUTUSTextClick={onABOUTUSTextClick}
        onSERVICESTextClick={onSERVICESTextClick}
        onCONTACTUSTextClick={onCONTACTUSTextClick}
        onLOGINTextClick={onLOGINTextClick}
        onSIGNUPTextClick={onSIGNUPTextClick}
      />
      <div className="handsimage-parent">
        <img className="handsimage-icon" alt="" src="/handsimage@2x.png" />
        <div className="start-discovering-your">
          Start Discovering Your Academic Adventure Now
        </div>
        <div className="this-is-not">
          This is not just a search; it's an invitation to discover and shape
          your unique academic story. Join us on this thrilling academic
          adventure, tailored just for you.
        </div>
        <button className="group-wrapper">
          <div className="rectangle-parent">
            <StartButton />
            <div className="start">START</div>
          </div>
        </button>
      </div>
      <Footer
        footerPosition="relative"
        footerFlexShrink="0"
        footerTop="unset"
        footerLeft="unset"
      />
    </div>
  );
};

export default LandingPage;
