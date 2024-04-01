import { useCallback } from "react";
import Scholarship from "../components/Scholarship";
import CoPilotPreview from "../components/CoPilotPreview";
import { useNavigate } from "react-router-dom";
import "./ScholarshipCollection.css";

const ScholarshipCollection = () => {
  const navigate = useNavigate();

  const onUserIconContainerClick = useCallback(() => {
    navigate("/application-dashboard");
  }, [navigate]);

  return (
    <div className="scholarship-collection">
      <img className="glass-card-icon1" alt="" src="/glass-card1@2x.png" />
      <div className="glass-card1">
        <div className="card1" />
        <Scholarship
          lockheedMartinSTEMScholar="TITLE"
          rectangle378="/rectangle-378.svg"
          prop="$$"
        />
        <div className="access-scholarships-that">
          Scholarships we found for you:
        </div>
        <CoPilotPreview />
        <div className="user-icon1" onClick={onUserIconContainerClick}>
          <div className="user-icon-item" />
          <div className="a1">A</div>
        </div>
      </div>
      <div className="logo-icon">
        <div className="logo-icon-child" />
        <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      </div>
      <div className="logo-icon1">
        <div className="logo-icon-child" />
        <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      </div>
      <div className="logo">
        <div className="logo-child" />
        <img className="image-2-icon" alt="" src="/image-2@2x.png" />
        <div className="eduaid1">EduAid</div>
      </div>
    </div>
  );
};

export default ScholarshipCollection;
