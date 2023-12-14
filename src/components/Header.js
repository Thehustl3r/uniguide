import { useMemo } from "react";
import "./Header.css";

const Header = ({
  headerFlexShrink,
  headerPosition,
  headerTop,
  headerLeft,
  onHOMETextClick,
  onABOUTUSTextClick,
  onSERVICESTextClick,
  onCONTACTUSTextClick,
  onLOGINTextClick,
  onSIGNUPTextClick,
}) => {
  const headerStyle = useMemo(() => {
    return {
      flexShrink: headerFlexShrink,
      position: headerPosition,
      top: headerTop,
      left: headerLeft,
    };
  }, [headerFlexShrink, headerPosition, headerTop, headerLeft]);

  return (
    <header className="header1" style={headerStyle}>
      <div className="logo-group">
        <img
          className="logo-icon2"
          alt=""
          src="/black-white-minimalist-logo--2-removebgpreview-11@2x.png"
        />
        <div className="home-group">
          <div className="home1" onClick={onHOMETextClick}>
            HOME
          </div>
          <div
            className="about-us2"
            onClick={onABOUTUSTextClick}
          >{`ABOUT US `}</div>
          <div className="services2" onClick={onSERVICESTextClick}>
            SERVICES
          </div>
          <div className="contact-us2" onClick={onCONTACTUSTextClick}>
            CONTACT US
          </div>
        </div>
        <div className="login-group">
          <div className="login3" onClick={onLOGINTextClick}>
            LOGIN
          </div>
          <div className="sign-up2" onClick={onSIGNUPTextClick}>
            SIGN UP
          </div>
        </div>
        <button className="group-button">
          <div className="group-child2" />
          <div className="search1">SEARCH</div>
          <img
            className="searc1-removebg-preview-1-icon1"
            alt=""
            src="/searc1removebgpreview-1@2x.png"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
