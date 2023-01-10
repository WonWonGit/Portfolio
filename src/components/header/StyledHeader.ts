import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors?.fontColor};
  display: flex;
  height: 70px;
  background: ${(props) => props.theme.colors?.background};
  justify-content: space-between;
  padding: 0 2rem;

  div {
    align-self: center;
    font-size: 1rem;
    font-weight: 800;

    ${(props) => props.theme.device?.tablet} {
      font-size: 13px;
    }
  }
`;
