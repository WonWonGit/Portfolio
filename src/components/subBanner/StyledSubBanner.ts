import styled from "styled-components";

export const SubBannerWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors?.pointColor};
  font-size: 6rem;
  font-family: "Barbra";
  color: whitesmoke;
  padding: 100px 0;
`;
