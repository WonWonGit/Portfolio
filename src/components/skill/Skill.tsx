import React from "react";
import { skills } from "../../datas/Skills";
import { ImgDiv, SkillTitle, SkillWrap } from "./StyledSkill";

const Skill = () => {
  return (
    <SkillWrap>
      <SkillTitle>Skills</SkillTitle>
      {skills.map((skill, index) => (
        <ImgDiv key={index}>
          <img src={skill.icon}></img>
        </ImgDiv>
      ))}
    </SkillWrap>
  );
};

export default Skill;
