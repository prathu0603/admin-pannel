import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
const Skills = () => {
  return (
    <div
      className="skills"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Skills;
