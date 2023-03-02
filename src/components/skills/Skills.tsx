import { useSkills } from "../../hooks/useSkills";
import React from "react";
import styled from "styled-components";
import Smile from "../../images/smile.png";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

interface SkillType {
  title: string;
  content: string[];
}

const SkillsWrap = styled.div`
  width: 80%;
  margin: 100px auto;
`;

const SkillsContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
`;

const SkillsTitle = styled.div`
  font-size: 4rem;
  font-family: "Barbra";
  color: ${(props) => props.theme?.colors.pointColor};
  position: relative;

  div {
    position: absolute;
    z-index: 1;
  }

  img {
    height: 200px;
    width: 200px;
    position: absolute;
    right: 20%;
    top: 10%;
    right: 20%;
    top: 10%;
    transform: rotate(-45deg);
  }
`;

const SkillsCard = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid ${(props) => props.theme?.colors.fontColor};
  border-radius: 15px;
`;

const SkillCardTitle = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: 600;
`;

const SkillsCardBody = styled.div`
  display: flex;
  height: 150px;
  flex-wrap: wrap;
  flex-direction: column;
  p {
    padding: 10px 0;
  }
`;

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
