import React from "react";
import { useRef, useState } from "react";
import { useAboutMe } from "../../hooks/useMetaAboutMe";
import SubBanner from "../subBanner/SubBanner";
import {
  AboutMeWrap,
  GridDiv,
  Title,
  GridContent,
  GridTitleDiv,
  GridTitleCard,
} from "./StyledAboutMe";

interface DataType {
  backgroudColor: string;
  title: string;
  titleColor: string;
  content: string[];
}

const AboutMe = () => {
  const datas: DataType[] = useAboutMe();
  const [selectedKeyPoint, setSelecteKeyPoint] = useState(datas[0].title);
  const homeRef = useRef<HTMLDivElement>(null);

  const onClickTitleCard = (title: string) => {
    setSelecteKeyPoint(title);
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={homeRef}>
        <SubBanner title="ABOUT ME" />
      </div>
      <AboutMeWrap>
        <>
          {datas.map((data, index) => (
            <GridDiv
              backgroudColor={data.backgroudColor}
              titleColor={data.titleColor}
              key={index}
              className={data.title == selectedKeyPoint ? "selected" : "none"}
            >
              <Title>{data.title}</Title>
              <GridContent>
                {data.content.map((line, index) => {
                  if (!line.startsWith("👉🏻")) {
                    return <p key={index}>{line}</p>;
                  } else {
                    return (
                      <p className="link">
                        {line.substring(0, line.indexOf(":") + 1)}
                        <a
                          href={line.substring(line.indexOf(":") + 1)}
                          target="_blank"
                        >
                          {line.substring(line.indexOf(":") + 1)}
                        </a>
                      </p>
                    );
                  }
                })}
              </GridContent>
            </GridDiv>
          ))}
          <GridTitleDiv>
            {datas.map((data, index) => {
              if (data.title != selectedKeyPoint) {
                return (
                  <GridTitleCard
                    backgroudColor={data.backgroudColor}
                    titleColor={data.titleColor}
                    key={index}
                    className={
                      data.title == selectedKeyPoint ? "selected" : "none"
                    }
                    onClick={() => onClickTitleCard(data.title)}
                  >
                    <Title>{data.title}</Title>
                  </GridTitleCard>
                );
              }
            })}
          </GridTitleDiv>
        </>
      </AboutMeWrap>
    </>
  );
};

export default AboutMe;
