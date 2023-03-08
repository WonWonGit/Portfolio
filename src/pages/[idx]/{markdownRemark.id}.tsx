import { unified } from "unified";
import rehypeReact from "rehype-react";
import React from "react";
import { graphql, HeadFC, Link } from "gatsby";
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

const BackBtn = styled.div`
  position: sticky;
  bottom: 20px;
  left: 20px;
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.colors?.fontColor};
  color: ${(props) => props.theme.colors?.background};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-weight: 900;

  :hover {
    cursor: pointer;
  }
`;

const ProjcetPage = ({ data }: any) => {
  const { htmlAst, frontmatter } = data.markdownRemark;

  return (
    <>
      <Layout>
        <SubBanner title={frontmatter.title} page="project" />
        <ProjectContetWrap>{renderAst(htmlAst)}</ProjectContetWrap>
        <BackBtn>
          <Link to="/#projectList">&larr;</Link>
        </BackBtn>
      </Layout>
    </>
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

export const Head: HeadFC = () => <title>Project</title>;
