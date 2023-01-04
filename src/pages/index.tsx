import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import GlobalStyle from "../style/GlobalStyle";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Skills from "../components/skills";
import Project from "../components/Project";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header></Header>
      <Layout>
        <Banner />
        <Intro />
        <Skills />
        <Project />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
