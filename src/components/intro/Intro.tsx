import styled from "styled-components";
import React, { useEffect } from "react";
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
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

interface PropsType {
  lan: string;
}

interface IntroType {
  jp: string;
  en: string;
}

const Intro = ({ lan }: PropsType) => {
  const data: IntroType = useIntro();
  const fadeAnimationLeftToRight = useScrollFadeIn("right", 2, 0);
  const fadeAnimationRightToLeft = useScrollFadeIn("left", 2, 0.5);

  useEffect(() => {}, [lan]);

  return (
    <IntroWrap>
      <IntroLeft {...fadeAnimationLeftToRight}>
        <IntroTitle>Hello</IntroTitle>
        <IntroContent>{lan === "en" ? data.en : data.jp}</IntroContent>
      </IntroLeft>
      <IntroRight {...fadeAnimationRightToLeft}>
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
