import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplyNow.css";

const ApplyNow = ({ applyNow }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <button className="apply-now-wrapper" onClick={onFrameButtonClick}>
      <div className="apply-now">{applyNow}</div>
    </button>
  );
};

export default ApplyNow;
