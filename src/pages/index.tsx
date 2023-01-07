import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import GlobalStyle from "../style/GlobalStyle";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Project from "../components/Project";
import Skill from "../components/Skill";
import AboutMe from "../components/AboutMe";

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
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
