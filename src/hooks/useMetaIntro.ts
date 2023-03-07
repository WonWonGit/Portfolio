import { graphql, useStaticQuery } from "gatsby";

export const useIntro = () => {
  const { site } = useStaticQuery(
    graphql`
      query HelloQuery {
        site {
          siteMetadata {
            hello {
              en
              jp
            }
          }
        }
      }
    `
  );

  const { hello } = site.siteMetadata;

  return hello;
};
