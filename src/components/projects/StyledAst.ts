import exp from "constants";
import styled from "styled-components";
import Yellow from "../../images/spark.png";

export const P = styled.p`
  line-height: 25px;
  font-size: 20px;
`;

export const H2 = styled.div`
  width: 100%;
  display: flex;
  color: ${(props) => props.theme.colors?.pointColor};
  font-family: "Barbra";
  font-size: 3rem;
  margin-bottom: 20px;
  margin-top: 60px;

  ${(props) => props.theme.device?.mobile} {
    font-size: 2.5rem;
  }
`;

export const H3 = styled.div`
  width: 100%;
  display: flex;
  font-weight: 700;
  font-size: 2rem;
  margin: 20px 0;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  &.gatsby-resp-image-image {
    box-shadow: none;
  }
`;

export const ProjectContetWrap = styled.div`
  width: 80%;
  margin: 200px auto;

  ${(props) => props.theme.device?.tablet} {
    margin: 100px auto;
  }

  .aboutWrap {
    display: flex;
    margin-bottom: 100px;

    ${(props) => props.theme.device?.tablet} {
      flex-direction: column;
    }

    .aboutImgWrap {
      width: 50%;
      display: flex;
      align-items: center;

      ${(props) => props.theme.device?.tablet} {
        width: 100%;
        justify-content: center;
        margin-bottom: 100px;
      }

      ${(props) => props.theme.device?.mobile} {
        margin-bottom: 0px;
      }

      .aboutImg {
        width: 400px;
        height: 400px;
        background: ${(props) => props.theme.colors?.pointColor};
        border-radius: 30px;
        display: flex;
        position: relative;

        ${(props) => props.theme.device?.tablet} {
          width: 0px;
        }

        ${(props) => props.theme.device?.desktop + "and (min-width: 770px)"} {
          width: 300px;
          height: 300px;
        }

        .spark {
          position: absolute;
          top: 30px;
          z-index: 999;
          width: 350px;
          height: 300px;
          left: 6px;

          ${(props) => props.theme.device?.desktop + "and (min-width: 770px)"} {
            width: 250px;
            height: 250px;
          }

          ${(props) => props.theme.device?.mobile} {
            width: 180px;
            height: 200px;
          }

          ${(props) => props.theme.device?.mobileS} {
            width: 150px;
            height: 200px;
          }

          img {
            backface-visibility: hidden;
          }

          span {
            max-width: 400px;
          }
        }
        .main {
          position: absolute;
          bottom: 30px;
          z-index: 999;
          width: 500px;
          left: 12px;
          height: auto;

          ${(props) => props.theme.device?.desktop + "and (min-width: 770px)"} {
            width: 400px;
          }

          ${(props) => props.theme.device?.tablet} {
            left: 50%;
            transform: translateX(-50%);
          }

          ${(props) => props.theme.device?.mobile} {
            width: 300px;
            top: 100px;
          }
        }

        .mobile {
          position: absolute;
          z-index: 999;
          width: 260px;
          height: auto;
          right: 30px;
          bottom: 0;

          ${(props) => props.theme.device?.desktop} {
            width: 250px;
            left: 50%;
            transform: translateX(-50%);
            bottom: -50px;
          }

          ${(props) => props.theme.device?.tablet} {
            width: 270px;
            top: -64px;
          }

          ${(props) => props.theme.device?.mobile} {
            width: 200px;
          }
        }
      }
    }

    .about {
      width: 50%;
      flex-direction: column;
      display: flex;
      margin-left: 50px;

      ${(props) => props.theme.device?.tablet} {
        width: 100%;
        margin-left: 0px;
      }
    }

    .aboutContent {
      line-height: 25px;
      font-size: 20px;
    }

    .aboutTitle {
      font-size: 3rem;
      font-family: "Barbra";
      color: #ff7400;
      margin-bottom: 20px;
    }
  }

  .stackWrap {
    display: flex;

    .stacks {
      flex: 1;

      .stacksList {
        li {
          padding: 4px 0;
          font-size: 20px;
        }
      }
    }
  }
`;
