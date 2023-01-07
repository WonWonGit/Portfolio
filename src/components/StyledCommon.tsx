import styled, { keyframes } from "styled-components";
import { Keyframes } from "styled-components";

export const StyledBannerTitle = styled.div`
  display: flex;
  justify-content: center;
  z-index: 999;
  height: 100%;
  position: inherit;
  align-items: center;
  font-family: "Barbra";
  font-size: 6rem;
  .main {
    color: ${(props) => props.theme.colors?.pointColor};
  }
  .subTitle {
    color: whitesmoke;
  }

  ${(props) => props.theme.device?.tablet} {
    font-size: 4rem;
  }

  ${(props) => props.theme.device?.mobileS} {
    font-size: 3rem;
  }
`;

export const StarDivLeft = styled.img`
  width: 50px;
  height: 50px;
  ${(props) => props.theme.device?.mobile} {
    width: 25px;
    height: 25px;
  }
`;

export const StarDivRight = styled(StarDivLeft)`
  transform: rotate(180deg);
`;

export const Fade = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;
