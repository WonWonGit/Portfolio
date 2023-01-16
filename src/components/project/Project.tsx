import React from "react";
import SubBanner from "../subBanner/SubBanner";
import { ProjectWrap, ProjectSubTitle, ProjectBody } from "./StyledProject";
import Jadoo from "../../images/project/jadooweb.png";
import Techno from "../../images/project/techno.png";
import Prozet from "../../images/sideProject/prozet.png";
import CoinTraker from "../../images/toyProject/coinTracker01.png";
import Mmm from "../../images/toyProject/mmm3.png";
import SpringBoard from "../../images/toyProject/blog1.png";
import { Link } from "gatsby";

const projectTest = [
  {
    work: [
      {
        url: "/project/3",
        src: Jadoo,
      },
      {
        url: "/project/6",
        src: Techno,
      },
    ],
    side: [
      {
        url: "/project/5",
        src: Prozet,
      },
    ],
    toy: [
      {
        url: "/project/4",
        src: Mmm,
      },
      {
        url: "/project/1",
        src: CoinTraker,
      },
      {
        url: "/project/2",
        src: SpringBoard,
      },
    ],
  },
];

const Project = () => {
  return (
    <>
      <SubBanner title="PROJECT" page="main" />
      <ProjectWrap>
        <ProjectSubTitle>Project</ProjectSubTitle>
        <ProjectBody>
          {projectTest.map((project) =>
            project.work.map((work) => (
              <div>
                <Link to={work.url}>
                  <img src={work.src}></img>
                </Link>
              </div>
            ))
          )}
        </ProjectBody>
        <ProjectSubTitle>Side Project</ProjectSubTitle>
        <ProjectBody>
          {projectTest.map((project) =>
            project.side.map((side) => (
              <div>
                <Link to={side.url}>
                  <img src={side.src}></img>
                </Link>
              </div>
            ))
          )}
        </ProjectBody>
        <ProjectSubTitle>Toy Project</ProjectSubTitle>
        <ProjectBody>
          {projectTest.map((project) =>
            project.toy.map((toy) => (
              <div>
                <Link to={toy.url}>
                  <img src={toy.src}></img>
                </Link>
              </div>
            ))
          )}
        </ProjectBody>
      </ProjectWrap>
    </>
  );
};

export default Project;
