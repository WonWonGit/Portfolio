import { graphql, useStaticQuery } from "gatsby";

export const useAboutMe = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            keyPoint {
              content {
                en
                jp
              }
              backgroudColor
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
