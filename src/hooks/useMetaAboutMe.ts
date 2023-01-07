import { graphql, useStaticQuery } from "gatsby";

export const useAboutMe = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            keyPoint {
              backgroudColor
              content
              title
              titleColor
            }
          }
        }
      }
    `
  );

  const { keyPoint } = site.siteMetadata;

  return keyPoint;
};
