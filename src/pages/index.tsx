import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import GlobalStyle from "../style/GlobalStyle";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import Intro from "../components/intro/Intro";
import Project from "../components/project/Project";
import Skill from "../components/skill/Skill";
import AboutMe from "../components/aboutMe/AboutMe";
import Banner from "../components/banner/Banner";
import Skills from "../components/skills/Skills";
import MyStrengths from "../components/myStrengths/MyStrengths";
import ProjectList from "../components/projectList/ProjectList";
import useLan from "../hooks/useLan";
import { useEffect, useState } from "react";
import styled from "styled-components";

const LanguageBtn = styled.div`
  height: 50px;
  width: 50px;
  background: ${(props) => props.theme.colors?.fontColor};
  color: ${(props) => props.theme.colors?.background};
  position: fixed;
  bottom: 20;
  padding: 10px;
  bottom: 20px;
  left: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexPage: React.FC<PageProps> = () => {
  const [toggleLanguage, state] = useLan();
  const [lan, setLan] = useState<string>("");

  useEffect(() => {
    setLan(state as string);
  }, [state]);

  return (
    <>
      <Header></Header>
      <Layout>
        <Banner />
        <Intro lan={lan as string} />
        {/* <Skill /> */}
        <Skills />
        {/* <AboutMe /> */}
        {/* <Project /> */}
        <MyStrengths lan={lan as string} />
        <ProjectList lan={lan as string} />
        <LanguageBtn onClick={toggleLanguage as () => void}>
          {lan === "en" ? "en" : "jp"}
        </LanguageBtn>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
