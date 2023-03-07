import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAboutMe } from "../../hooks/useMetaAboutMe";
import useScrollStrength from "../../hooks/useScrollStrength";
import useSetStrength from "../../hooks/useSetStrength";
import {
  AboutMeEnd,
  AboutMeRoundInside,
  AboutMeRoundOutside,
  AboutMeRoundWrap,
  AboutMeStart,
  AboutMeStrengWrap,
  AboutMeStrenth,
  AboutMeWrap,
  RoundWrap,
  Strength,
  StrengthContent,
  StrengthRound,
  StrengthTitle,
} from "./StyledMyStrengths";

interface DataType {
  backgroudColor: string;
  title: string;
  titleColor: string;
  content: {
    en: string;
    jp: string;
  };
}

interface PropsType {
  lan: string;
}

const MyStrengths = ({ lan }: PropsType) => {
  const aboutMe: DataType[] = useAboutMe();

  const [strenghValue, setStrenghValue] = useState("");

  useEffect(() => {}, [strenghValue, lan]);

  return (
    <>
      <AboutMeWrap>
        <RoundWrap>
          <AboutMeRoundWrap
            className={`roundWrap`}
            {...useScrollStrength(strenghValue, 0.2)}
          >
            <AboutMeRoundOutside className={strenghValue !== "" ? "left" : ""}>
              {aboutMe.map((about: DataType, index: number) => (
                <StrengthRound
                  key={index}
                  className={
                    (about.title.replace(" ", ""),
                    about.title.replace(" ", "") === strenghValue
                      ? "active"
                      : "")
                  }
                >
                  <Strength key={index}>{about.title}</Strength>
                </StrengthRound>
              ))}
            </AboutMeRoundOutside>
            <AboutMeRoundInside className={strenghValue !== "" ? "left" : ""}>
              <div>These are my strengths</div>
            </AboutMeRoundInside>
          </AboutMeRoundWrap>
        </RoundWrap>
        <AboutMeStrengWrap>
          <AboutMeStart {...useSetStrength("", setStrenghValue)}></AboutMeStart>
          {aboutMe.map((about: DataType, index: number) => (
            <AboutMeStrenth
              key={index}
              className={
                strenghValue !== about.title.replace(" ", "")
                  ? "fadeOut"
                  : "fadeIn"
              }
              {...useSetStrength(about.title.replace(" ", ""), setStrenghValue)}
            >
              <StrengthTitle>{about.title}</StrengthTitle>
              <StrengthContent>
                {lan === "en" ? about.content.en : about.content.jp}
              </StrengthContent>
            </AboutMeStrenth>
          ))}
          <AboutMeEnd {...useSetStrength("", setStrenghValue)}></AboutMeEnd>
        </AboutMeStrengWrap>
      </AboutMeWrap>
    </>
  );
};

export default MyStrengths;
