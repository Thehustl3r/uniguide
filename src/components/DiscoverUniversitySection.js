import ApplyNow from "./ApplyNow";
import "./DiscoverUniversitySection.css";

const DiscoverUniversitySection = () => {
  return (
    <main className="section1">
      <div className="frame-parent2">
        <img className="frame-icon" alt="" src="/group-23@2x.png" />
        <div className="discover-your-perfect-universi-parent">
          <div className="discover-your-perfect">
            Discover Your Perfect University Here
          </div>
          <div className="explore-a-world">
            Explore a world of educational opportunities tailored to your
            preferences and find the ideal academic path that suits your goals.
            Start your educational journey today!
          </div>
          <ApplyNow applyNow=" Apply Now" />
        </div>
      </div>
    </main>
  );
};

export default DiscoverUniversitySection;
