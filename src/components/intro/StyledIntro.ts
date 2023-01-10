import styled from "styled-components";
import { Fade } from "../StyledCommon";

interface StarPosition {
  top: string;
  right: string;
}

export const IntroWrap = styled.div`
  display: flex;
  width: 80%;
  margin: 50px auto;

  ${(props) => props.theme.device?.mobile} {
    margin: 30px auto;
    flex-direction: column;
  }

  ${(props) => props.theme.device?.mobileS} {
    margin: 10px auto;
  }
`;

export const IntroTitle = styled.div`
  font-family: "Barbra";
  font-size: 3rem;
  color: ${(props) => props.theme.colors?.pointColor};
  padding-bottom: 20px;
`;

export const IntroLeft = styled.div`
  flex: 1;
  animation: ${Fade} 4s forwards;
`;

export const IntroRight = styled.div`
  flex: 1;
  justify-content: end;
  display: flex;
  padding-right: 30px;

  animation: ${Fade} 5s forwards;

  div {
    width: 300px;
    height: 300px;
    position: relative;
    background: ${(props) => props.theme.colors?.pointColor};
    border-radius: 27px;

    ${(props) => props.theme.device?.tablet} {
      width: 200px;
      height: 200px;
    }
  }

  ${(props) => props.theme.device?.mobile} {
    margin-top: 120px;
    justify-content: center;
  }
`;

export const ProfileImg = styled.img`
  width: 300px;
  position: absolute;
  right: 15px;
  bottom: 0;

  ${(props) => props.theme.device?.tablet} {
    width: 200px;
  }
`;

export const ProfileStar = styled.img<StarPosition>`
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  width: 32px;
`;
