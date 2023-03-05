import { graphql, useStaticQuery } from "gatsby";

const userProjectList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query projectList {
        allMarkdownRemark(sort: { frontmatter: { idx: ASC } }) {
          nodes {
            frontmatter {
              idx
              title
              summary
            }
          }
        }
      }
    `
  );
  const { nodes } = allMarkdownRemark;
  return nodes;
};

export default userProjectList;
