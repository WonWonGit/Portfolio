import React from "react";
import SubBanner from "../subBanner/SubBanner";
import { ProjectWrap, ProjectSubTitle, ProjectBody } from "./StyledProject";

const Project = () => {
  return (
    <>
      <SubBanner title="PROJECT" />
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
