import styled from "styled-components";
import React from "react";
import MyImg from "../images/Subject.png";
import Star from "../images/Star.png";
import { Fade } from "./StyledCommon";

interface StarPosition {
  top: string;
  right: string;
}

const IntroWrap = styled.div`
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

const IntroTitle = styled.div`
  font-family: "Barbra";
  font-size: 3rem;
  color: ${(props) => props.theme.colors?.pointColor};
  padding-bottom: 20px;
`;

const IntroLeft = styled.div`
  flex: 1;
  animation: ${Fade} 4s forwards;
`;

const IntroRight = styled.div`
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

const ProfileImg = styled.img`
  width: 300px;
  position: absolute;
  right: 15px;
  bottom: 0;

  ${(props) => props.theme.device?.tablet} {
    width: 200px;
  }
`;

const ProfileStar = styled.img<StarPosition>`
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  width: 32px;
`;

const Intro = () => {
  return (
    <IntroWrap>
      <IntroLeft>
        <IntroTitle>Hello</IntroTitle>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          repellat architecto provident unde aliquid vero distinctio, quos
          nesciunt quaerat quisquam enim laudantium iste quo aspernatur veniam
          eos? Amet, repellendus non!
        </div>
      </IntroLeft>
      <IntroRight>
        <div>
          <ProfileStar top={"-60px"} right={"0px"} src={Star}></ProfileStar>
          <ProfileStar top={"-31px"} right={"-20px"} src={Star}></ProfileStar>
          <ProfileImg src={MyImg}></ProfileImg>
        </div>
      </IntroRight>
    </IntroWrap>
  );
};

export default Intro;
