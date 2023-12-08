import { useCallback } from "react";
import "./ApplyNow.css";

const ApplyNow = ({ applyNow }) => {
  const onFrameButton1Click = useCallback(() => {
    // Please sync "Sign Up" to the project
  }, []);

  return (
    <button className="apply-now-wrapper" onClick={onFrameButton1Click}>
      <div className="apply-now">{applyNow}</div>
    </button>
  );
};

export default ApplyNow;
