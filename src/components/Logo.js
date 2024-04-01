import "./Logo.css";

const Logo = ({ onLogoContainerClick }) => {
  return (
    <div className="logo1" onClick={onLogoContainerClick}>
      <div className="logo-item" />
      <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
      <div className="eduaid2">EduAid</div>
    </div>
  );
};

export default Logo;
