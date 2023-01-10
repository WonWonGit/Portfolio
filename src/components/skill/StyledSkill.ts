import styled from "styled-components";

export const SkillWrap = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: 100px auto;
  gap: 40px;

  ${(props) => props.theme.device?.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    width: 100px;
    height: 100px;

    ${(props) => props.theme.device?.mobile} {
      width: 50px;
      height: 50px;
    }
  }
`;

export const SkillTitle = styled.div`
  font-family: "Barbra";
  font-size: 3rem;
  color: ${(props) => props.theme.colors?.pointColor};
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.theme.device?.mobile} {
    grid-column: 1 / span 2;
    justify-content: start;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
