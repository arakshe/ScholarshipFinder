import { useMemo } from "react";
import "./Scholarship.css";

const Scholarship = ({
  winUpTo40000ForStudentsSt,
  lockheedMartinSTEMScholar,
  rectangle378,
  prop,
  prop1,
  groupDivTop,
  groupDivLeft,
  rectangleIconTop,
  rectangleIconLeft,
  spanLeft,
  spanWidth,
  matchLeft,
  propWidth,
  propLeft,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivTop, groupDivLeft]);

  const groupDiv1Style = useMemo(() => {
    return {
      top: rectangleIconTop,
      left: rectangleIconLeft,
    };
  }, [rectangleIconTop, rectangleIconLeft]);

  const matchStyle = useMemo(() => {
    return {
      left: spanLeft,
      width: spanWidth,
    };
  }, [spanLeft, spanWidth]);

  const rectangleIconStyle = useMemo(() => {
    return {
      left: matchLeft,
    };
  }, [matchLeft]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const xMatchStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="rectangle-parent2" style={groupDivStyle}>
      <div className="group-child4" />
      <div className="title">{lockheedMartinSTEMScholar}</div>
      <div className="link-parent" style={groupDiv1Style}>
        <b className="link">LINK</b>
        <div className="group-child5" />
      </div>
      <div className="match" style={matchStyle}>
        <img
          className="match-child"
          alt=""
          src={rectangle378}
          style={rectangleIconStyle}
        />
        <div className="div3" style={divStyle}>
          {prop}
        </div>
        <div className="x-match" style={xMatchStyle}>
          <p className="x">{`X% `}</p>
          <p className="x">Match</p>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
