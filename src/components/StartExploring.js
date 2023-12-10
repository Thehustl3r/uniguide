import { useCallback } from "react";
import "./StartExploring.css";

const StartExploring = ({ startExploring }) => {
  const onStartExploringTextClick = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  return (
    <button className="start-exploring-wrapper">
      <div className="start-exploring" onClick={onStartExploringTextClick}>
        {startExploring}
      </div>
    </button>
  );
};

export default StartExploring;
