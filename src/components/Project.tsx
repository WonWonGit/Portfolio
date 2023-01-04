import React from "react";
import styled from "styled-components";
import { StarDivLeft, StarDivRight, StyledBannerTitle } from "./StyledCommon";
import Star from "../images/Star.png";

const ProjectWrap = styled.div`
  width: 80%;
  margin: 100px auto;
`;

const ProjectBanner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors?.pointColor};
  font-size: 6rem;
  font-family: "Barbra";
  color: whitesmoke;
  padding: 100px 0;
`;

const ProjectSubTitle = styled.div`
  color: #ff7400;
  font-family: "Barbra";
  text-align: center;
  font-size: 3rem;
  margin: 100px 0;
`;

const ProjectBody = styled.div`
  display: flex;

  div {
    height: 200px;
  }

  div:nth-child(1) {
    flex: 1;
  }

  div:nth-child(2) {
    width: 2px;
    background: ${(props) => props.theme.colors?.pointColor};
  }

  div:nth-child(3) {
    flex: 1;
  }
`;

const Project = () => {
  return (
    <>
      <ProjectBanner>
        <StyledBannerTitle>
          <StarDivLeft src={Star} />
          <div className="project">PROJECT</div>
          <StarDivRight src={Star} />
        </StyledBannerTitle>
      </ProjectBanner>
      <ProjectWrap>
        <ProjectSubTitle>Project</ProjectSubTitle>
        <ProjectBody>
          <div></div>
          <div></div>
          <div></div>
        </ProjectBody>
        <ProjectSubTitle>Side Project</ProjectSubTitle>
        <ProjectBody>
          <div></div>
          <div></div>
          <div></div>
        </ProjectBody>
        <ProjectSubTitle>Toy Project</ProjectSubTitle>
        <ProjectBody>
          <div></div>
          <div></div>
          <div></div>
        </ProjectBody>
      </ProjectWrap>
    </>
  );
};

export default Project;
