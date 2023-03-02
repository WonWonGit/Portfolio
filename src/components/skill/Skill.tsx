import React from "react";
import { skills } from "../../datas/Skills";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { ImgDiv, SkillTitle, SkillWrap } from "./StyledSkill";

const Skill = () => {
  const fadeAnimationTopToDown = useScrollFadeIn("down", 2, 0);

  return (
    <SkillWrap>
      <SkillTitle {...fadeAnimationTopToDown}>Skills</SkillTitle>
      {skills.map((skill, index) => (
        <ImgDiv key={index} {...useScrollFadeIn("down", 2, index / 3)}>
          <img src={skill.icon}></img>
        </ImgDiv>
      ))}
    </SkillWrap>
  );
};

export default Skill;
