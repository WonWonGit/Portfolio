import styled from "styled-components";

export const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.colors?.background};
  height: auto;
  /* position: relative; */
  /* overflow: auto; */
`;
