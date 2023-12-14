import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onLoginTextClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onNeedHelpTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="login1">
      <img
        className="black-white-minimalist-logo-2-icon1"
        alt=""
        src="/black-white-minimalist-logo--2-removebgpreview-1@2x.png"
      />
      <b className="log-in">Log in</b>
      <div className="email">
        <span className="email1">Email</span>
        <span>:</span>
      </div>
      <div className="password">Password</div>
      <div className="login-child" />
      <div className="login-item" />
      <div className="remember-me-parent">
        <div className="remember-me">Remember me</div>
        <div className="forgot-password">Forgot password</div>
      </div>
      <div className="group-div">
        <div className="rectangle-div" />
        <div className="login2" onClick={onLoginTextClick}>
          Login
        </div>
      </div>
      <div className="privacy-policy-group">
        <div className="privacy-policy3">Privacy policy</div>
        <div className="terms-of-use3">Terms of Use</div>
        <div className="need-help1" onClick={onNeedHelpTextClick}>
          Need help?
        </div>
      </div>
    </div>
  );
};

export default Login;
