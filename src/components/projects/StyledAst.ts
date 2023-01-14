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
  color: ${(props) => props.theme.colors.pointColor};
  font-family: "Barbra";
  font-size: 3rem;
  margin-bottom: 20px;
  margin-top: 60px;
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
  margin: 100px auto;

  .aboutWrap {
    display: flex;

    .aboutImgWrap {
      width: 50%;
      display: flex;
      align-items: center;

      .aboutImg {
        width: 400px;
        height: 400px;
        background: ${(props) => props.theme?.colors.pointColor};
        border-radius: 30px;
        display: flex;
        margin: 0 auto;
        position: relative;

        .spark {
          position: absolute;
          top: 88px;
          z-index: 999;
          width: 200px;
          height: 300px;
          left: 6px;
        }
        .main {
          position: absolute;
          bottom: 30px;
          z-index: 999;
          width: 100%;
          height: auto;
          right: -10px;
        }
      }
    }

    .about {
      width: 40%;
      flex-direction: column;
      display: flex;
      margin: 0 auto;
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
