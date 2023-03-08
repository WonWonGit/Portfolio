import { graphql, useStaticQuery } from "gatsby";

interface NodesType {
  nodes: [];
}

interface FrontmatterType {
  frontmatter: {
    idx: number;
    title: string;
    summary: string;
    group: string;
  };
}

const userProjectList = (lan: string) => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query projectList {
        allMarkdownRemark(sort: { frontmatter: { idx: DESC } }) {
          nodes {
            frontmatter {
              idx
              title
              summary
              group
            }
            id
          }
        }
      }
    `
  );
  const { nodes } = allMarkdownRemark;

  const data = nodes.filter(
    (node: FrontmatterType) => node.frontmatter.group === lan
  );

  return data;
};

export default userProjectList;
