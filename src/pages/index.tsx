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
import AboutMeRound from "../components/aboutMe/aboutMeRound/AboutMeRound";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header></Header>
      <Layout>
        <Banner />
        <Intro />
        <Skill />
        <AboutMe />
        <Project />
        <AboutMeRound></AboutMeRound>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Portfolio</title>;
