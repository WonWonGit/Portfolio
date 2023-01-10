import styled from "styled-components";
import React from "react";
import MyImg from "../../images/subject.png";
import Star from "../../images/star.png";

import {
  IntroLeft,
  IntroRight,
  IntroTitle,
  IntroWrap,
  ProfileImg,
  ProfileStar,
} from "./StyledIntro";

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
