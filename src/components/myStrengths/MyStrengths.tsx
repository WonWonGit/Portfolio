import React, { useState } from "react";
import { useEffect } from "react";
import { useAboutMe } from "../../hooks/useMetaAboutMe";
import useScrollStrength from "../../hooks/useScrollStrength";
import useSetStrength from "../../hooks/useSetStrength";
import {
  AboutMeContentWrap,
  AboutMeEnd,
  AboutMeRoundInside,
  AboutMeRoundOutside,
  AboutMeRoundWrap,
  AboutMeStart,
  AboutMeStrengWrap,
  AboutMeStrenth,
  AboutMeWrap,
  Strength,
  StrengthContent,
  StrengthRound,
  StrengthTitle,
} from "./StyledMyStrengths";

interface DataType {
  backgroudColor: string;
  title: string;
  titleColor: string;
  content: string[];
}

const MyStrengths = () => {
  const aboutMe: DataType[] = useAboutMe();
  const [strenghValue, setStrenghValue] = useState("");

  useEffect(() => {}, [strenghValue]);

  return (
    <AboutMeWrap>
      <AboutMeContentWrap>
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
                  about.title.replace(" ", "") === strenghValue ? "active" : "")
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
              <StrengthContent>{about.content}</StrengthContent>
            </AboutMeStrenth>
          ))}
          <AboutMeEnd {...useSetStrength("", setStrenghValue)}></AboutMeEnd>
        </AboutMeStrengWrap>
      </AboutMeContentWrap>
    </AboutMeWrap>
  );
};

export default MyStrengths;
