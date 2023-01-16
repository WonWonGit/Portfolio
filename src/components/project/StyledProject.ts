import styled from "styled-components";

export const ProjectWrap = styled.div`
  width: 80%;
  margin: 100px auto;
`;

export const ProjectSubTitle = styled.div`
  color: #ff7400;
  font-family: "Barbra";
  text-align: center;
  font-size: 3rem;
  margin: 100px 0;
`;

export const ProjectBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;

  ${(props) => props.theme.device?.tablet} {
    flex-direction: column;
  }

  div {
    img {
      width: 100%;
      height: 200px;
      border-radius: 20px;
      box-shadow: 10px 10px 17px -7px rgba(0, 0, 0, 0.32);

      ${(props) => props.theme.device?.tablet} {
        width: 60%;
        margin: 40px auto;
        display: block;
      }

      ${(props) => props.theme.device?.mobile} {
        width: 100%;
      }
    }

    :hover img {
      transition: 0.4s;
      transform: translateY(-10px);
    }
  }
`;
