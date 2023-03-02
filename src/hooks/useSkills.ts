import { graphql, useStaticQuery } from "gatsby";

export const useSkills = () => {
  const { site } = useStaticQuery(
    graphql`
      query mySkills {
        site {
          siteMetadata {
            skills {
              content
              title
            }
          }
        }
      }
    `
  );

  const { skills } = site.siteMetadata;

  return skills;
};
