import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StartExploring.css";

const StartExploring = ({ startExploring }) => {
  const navigate = useNavigate();

  const onStartExploringTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <button className="start-exploring-wrapper">
      <div className="start-exploring" onClick={onStartExploringTextClick}>
        {startExploring}
      </div>
    </button>
  );
};

export default StartExploring;
