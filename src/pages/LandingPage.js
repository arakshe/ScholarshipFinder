import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onGenerateButtonContainerClick = useCallback(() => {
    navigate("/introducing-copilot");
  }, [navigate]);

  return (
    <div className="landing-page">
      <img
        className="background-gradient-icon"
        alt=""
        src="/background-gradient@2x.png"
      />
      <div className="connect-with-scholarships-container">
        <p className="connect-with-scholarships">Connect with Scholarships</p>
        <p className="connect-with-scholarships">
          <span>{`using `}</span>
          <span className="eduaid">EduAid !</span>
        </p>
      </div>
      <div className="generate-button" onClick={onGenerateButtonContainerClick}>
        <div className="generate-button-child" />
        <div className="unlock-opportunities">
          <span className="unlock-opportunities-txt-container">
            <p className="connect-with-scholarships">{`Unlock `}</p>
            <p className="connect-with-scholarships">Opportunities</p>
          </span>
        </div>
      </div>
      <div className="input-text-box">
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="tell-me-about">
            Tell me about yourself as student. Where do you live? What are you
            studying?
          </div>
        </div>
      </div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <Logo />
      <div className="nav-bar">
        <div className="home">Home</div>
        <div className="about-us">About us</div>
        <div className="contact-us">Contact Us</div>
        <div className="nav-bar-child" />
        <div className="sign-in">Sign in</div>
      </div>
    </div>
  );
};

export default LandingPage;
