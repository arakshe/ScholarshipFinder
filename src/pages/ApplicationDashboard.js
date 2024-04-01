import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import "./ApplicationDashboard.css";

const ApplicationDashboard = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="application-dashboard">
      <img className="glass-card-icon" alt="" src="/glass-card@2x.png" />
      <div className="glass-card">
        <div className="card" />
        <div className="scholarship-preview">
          <div className="scholarship-preview-child" />
          <div className="amount">$ AMOUNT</div>
          <div className="div">3/23/2024</div>
          <div className="scholarship-name">SCHOLARSHIP NAME</div>
        </div>
        <div className="scholarship-preview1">
          <div className="scholarship-preview-child" />
          <div className="amount">$ AMOUNT</div>
          <div className="div1">3/23/2024</div>
          <div className="scholarship-name">SCHOLARSHIP NAME</div>
        </div>
        <div className="applied">Applied:</div>
        <div className="attach-files-box">
          <div className="attach-files-box-child" />
          <img className="image-1-icon" alt="" src="/image-1@2x.png" />
          <div className="attach-files">Attach files</div>
          <div className="application-materials">Application Materials</div>
          <div className="application-materials1">
            Keep your files in one place.
          </div>
        </div>
        <div className="glass-card-child" />
        <div className="glass-card-item" />
        <div className="glass-card-inner" />
        <div className="attach-files1">My Story.pdf</div>
        <div className="rectangle-div" />
        <div className="attach-files2">Supplement.pdf</div>
        <div className="glass-card-child1" />
        <div className="attach-files3">Recommendation.pdf</div>
        <div className="user-icon">
          <div className="user-icon-child" />
          <div className="a">A</div>
        </div>
        <div className="group-parent">
          <div className="rectangle-group">
            <div className="group-item" />
            <div className="low-income">Low-income</div>
          </div>
          <div className="rectangle-container">
            <div className="group-item" />
            <div className="high-schooler">High Schooler</div>
          </div>
          <div className="group-div">
            <div className="group-child1" />
            <div className="gpa-39">GPA: 3.9</div>
          </div>
          <div className="rectangle-parent1">
            <div className="group-child2" />
            <div className="minority-background">Minority Background</div>
          </div>
          <div className="edit-button">
            <div className="edit-button-child" />
            <img className="edit-05-icon" alt="" src="/edit05.svg" />
          </div>
        </div>
      </div>
      <div className="status">Awarded</div>
      <div className="name">Scholarships Applied to:</div>
      <div className="name1">Amount Awarded:</div>
      <div className="name2">Your Profile:</div>
      <div className="ellipse-parent">
        <div className="ellipse-div" />
        <img className="ellipse-icon" alt="" src="/ellipse-97.svg" />
        <img className="group-child3" alt="" src="/ellipse-98.svg" />
        <div className="k">
          <span>$10</span>
          <span className="k1">k</span>
        </div>
      </div>
      <div className="name3">Amy Doe</div>
      <Logo onLogoContainerClick={onLogoContainerClick} />
    </div>
  );
};

export default ApplicationDashboard;
