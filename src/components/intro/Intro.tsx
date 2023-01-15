import styled from "styled-components";
import React from "react";
import MyImg from "../../images/subject.png";
import Star from "../../images/star.png";

import {
  IntroContent,
  IntroLeft,
  IntroRight,
  IntroTitle,
  IntroWrap,
  ProfileImg,
  ProfileStar,
} from "./StyledIntro";
import { useIntro } from "../../hooks/useMetaIntro";

const Intro = () => {
  const data = useIntro();

  return (
    <IntroWrap>
      <IntroLeft>
        <IntroTitle>Hello</IntroTitle>
        <IntroContent>{data}</IntroContent>
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
