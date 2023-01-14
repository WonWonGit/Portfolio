import { unified } from "unified";
import rehypeReact from "rehype-react";
import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/Layout";
import styled from "styled-components";
import SubBanner from "../../components/subBanner/SubBanner";
import {
  H2,
  H3,
  P,
  ProjectContetWrap,
} from "../../components/projects/StyledAst";

const processor = unified().use(rehypeReact, {
  createElement: React.createElement,
  components: {
    h2: H2,
    h3: H3,
    p: P,
  },
});

const renderAst = (ast: any): JSX.Element => {
  return processor.stringify(ast) as unknown as JSX.Element;
};

const ProjcetPage = ({ data }: any) => {
  const { htmlAst, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SubBanner title={frontmatter.title} page="project" />
      <ProjectContetWrap>{renderAst(htmlAst)}</ProjectContetWrap>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        title
      }
      id
    }
  }
`;

export default ProjcetPage;
