import { useSkills } from "../../hooks/useSkills";
import React from "react";
import Smile from "../../images/smile.png";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import {
  SkillsWrap,
  SkillsContent,
  SkillsTitle,
  SkillsCard,
  SkillCardTitle,
  SkillsCardBody,
} from "./StyledSkill";

interface SkillType {
  title: string;
  content: string[];
}

const Skills = () => {
  const skills: SkillType[] = useSkills();

  return (
    <SkillsWrap>
      <SkillsContent>
        <SkillsTitle>
          <div>My Skills</div>
          <img src={Smile} />
        </SkillsTitle>
        {skills.map((skill: SkillType, index: number) => (
          <SkillsCard key={index} {...useScrollFadeIn("down", 2, index / 2)}>
            <SkillCardTitle>{skill.title}</SkillCardTitle>
            <SkillsCardBody>
              {skill.content.map((skill: string, index: number) => (
                <p key={index}>{skill}</p>
              ))}
            </SkillsCardBody>
          </SkillsCard>
        ))}
      </SkillsContent>
    </SkillsWrap>
  );
};

export default Skills;
