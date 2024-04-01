import { useCallback } from "react";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import EditButton from "../components/EditButton";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import "./IntroducingCoPilot.css";

const IntroducingCoPilot = () => {
  const navigate = useNavigate();

  const onContinueButtonContainerClick = useCallback(() => {
    navigate("/scholarship-collection");
  }, [navigate]);

  return (
    <div className="introducing-co-pilot">
      <img
        className="introducing-co-pilot-child"
        alt=""
        src="/rectangle-46@2x.png"
      />
      <div className="what-we-know-about-user">
        <div className="what-we-know-about-user-child" />
        <div className="heres-what-we">
          Here’s what we know about you so far:
        </div>
        <div className="component-parent">
          <GroupComponent3 />
          <GroupComponent2 />
          <GroupComponent1 />
          <GroupComponent />
          <EditButton />
        </div>
      </div>
      <div className="found-scholarships-stats">
        <div className="found-scholarships-stats-child" />
        <div className="these-are-the">{`These are the scholarships we found: `}</div>
        <div className="scholarships">1573+ Scholarships</div>
        <div className="div2">$104,000+</div>
        <div className="found-across-the">Found across the country</div>
        <div className="offered">Offered</div>
        <div
          className="continue-button"
          onClick={onContinueButtonContainerClick}
        >
          <div className="continue-button-child" />
          <div className="continue">Continue</div>
        </div>
        <div className="found-scholarships-stats-item" />
        <div className="found-scholarships-stats-inner" />
        <div className="found-scholarships-stats-child1" />
        <div className="found-scholarships-stats-child2" />
      </div>
      <div className="intro-block">
        <div className="intro-block-child" />
        <div className="introducing-eduaid-let">
          Introducing EduAid! Let us match you with scholarships that fit your
          interests and background. Spend more time on your education by using
          EduAid.
        </div>
      </div>
      <div className="nav-bar1">
        <div className="home1">Home</div>
        <div className="about-us1">About us</div>
        <div className="contact-us1">Contact Us</div>
        <div className="nav-bar-item" />
        <div className="sign-in1">Sign in</div>
      </div>
      <Logo />
    </div>
  );
};

export default IntroducingCoPilot;
