import { useMemo } from "react";
import "./Footer.css";

const Footer = ({
  footerPosition,
  footerFlexShrink,
  footerTop,
  footerLeft,
}) => {
  const footerStyle = useMemo(() => {
    return {
      position: footerPosition,
      flexShrink: footerFlexShrink,
      top: footerTop,
      left: footerLeft,
    };
  }, [footerPosition, footerFlexShrink, footerTop, footerLeft]);

  return (
    <div className="footer1" style={footerStyle}>
      <div className="frame-parent1">
        <div className="uniguide-is-your-one-stop-plat-group">
          <div className="uniguide-is-your1">
            UniGuide is your one-stop platform for finding the right university
            globally. We offer personalized searches, detailed profiles, and
            guidance for a seamless application process, empowering students to
            make informed decisions.
          </div>
          <img className="logo-icon3" alt="" src="/logo@2x.png" />
        </div>
        <div className="contact-group">
          <div className="contact1">CONTACT</div>
          <img className="call-1-icon1" alt="" src="/call-1@2x.png" />
          <div className="div1">+250725317338</div>
          <img className="email-1-icon1" alt="" src="/email-1@2x.png" />
          <div className="uniguidegmailcom1">uniguide@gmail.com</div>
        </div>
        <div className="links-group">
          <div className="links1">LINKS</div>
          <div className="privacy-policy6">Privacy policy</div>
          <div className="terms-of-use6">Terms of use</div>
        </div>
        <div className="group-wrapper1">
          <div className="social-networks-group">
            <div className="social-networks1">SOCIAL NETWORKS</div>
            <div className="fb-group">
              <img className="fb-icon1" alt="" src="/fb@2x.png" />
              <img className="linkd-icon1" alt="" src="/linkd@2x.png" />
              <img className="insta-icon1" alt="" src="/insta@2x.png" />
              <div className="uniguide3">uniguide</div>
              <div className="uniguide4">@uniguide</div>
              <div className="uniguide5">@uniguide</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
