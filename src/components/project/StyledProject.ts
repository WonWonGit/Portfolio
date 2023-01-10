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

  div {
    height: 200px;
  }

  div:nth-child(1) {
    flex: 1;
  }

  div:nth-child(2) {
    width: 2px;
    background: ${(props) => props.theme.colors?.pointColor};
  }

  div:nth-child(3) {
    flex: 1;
  }
`;
