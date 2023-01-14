import styled from "styled-components";

interface StyledType {
  page: string;
}

export const SubBannerWrap = styled.div<StyledType>`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) =>
    props.page === "main"
      ? (props) => props.theme.colors?.pointColor
      : "black"};
  font-size: 6rem;
  font-family: "Barbra";
  color: whitesmoke;
  padding: 100px 0;
`;
