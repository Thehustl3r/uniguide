import FormContainer from "../components/FormContainer";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up1">
      <div className="by-clicking-register-i-confir-parent">
        <div className="by-clicking-register-container">
          {`By clicking Register, I confirm that I have read and agree to the UniGuide `}
          <span className="privacy-policy4">Privacy policy</span>
          {` and  `}
          <span className="privacy-policy4">Terms of Use.</span>
        </div>
        <div className="rectangle-parent1">
          <div className="group-child1" />
          <div className="register">{`Register `}</div>
        </div>
        <div className="privacy-policy-container">
          <div className="privacy-policy5">Privacy policy</div>
          <div className="terms-of-use5">Terms of Use</div>
          <div className="need-help2">Need help?</div>
        </div>
        <FormContainer />
        <b className="create-your-account">Create your account</b>
        <img
          className="black-white-minimalist-logo-2-icon2"
          alt=""
          src="/black-white-minimalist-logo--2-removebgpreview-1@2x.png"
        />
      </div>
    </div>
  );
};

export default SignUp;
