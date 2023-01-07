import React from "react";
import styled from "styled-components";
import { useAboutMe } from "../hooks/useMetaAboutMe";
import SubBanner from "./SubBanner";

interface DataType {
  backgroudColor: string;
  title: string;
  titleColor: string;
  content: string[];
}

interface StyleType {
  backgroudColor: string;
  titleColor: string;
}

const AboutMeWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fit, 250px);
  width: 80%;
  margin: 100px auto;
  gap: 20px;

  div:nth-child(1) {
    grid-column: 1 / span 2;
  }

  div:nth-child(4) {
    grid-area: 2/ 2 / 4 / -1;

    justify-content: flex-start;
    p {
      color: whitesmoke;
    }
  }
`;

const Title = styled.div`
  font-family: "Barbra";
  font-size: 3rem;
  padding-bottom: 25px;

  ${(props) => props.theme.device?.mobile} {
    font-size: 2rem;
  }
`;

const GridDiv = styled.div<StyleType>`
  background-color: ${(props) => props.backgroudColor};
  ${Title} {
    color: ${(props) => props.titleColor};
  }
  padding: 40px;
  border-radius: 20px;
  box-shadow: 7px 10px 30px -1px rgb(0 0 0 / 14%);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GridContent = styled.div`
  font-size: 20px;
  p {
    line-height: 30px;
  }
  .link {
    font-size: 25px;
    padding-top: 20px;
  }
`;

const AboutMe = () => {
  const datas: DataType[] = useAboutMe();

  return (
    <>
      <SubBanner title="ABOUT ME" />
      <AboutMeWrap>
        {datas.map((data, index) => (
          <GridDiv
            backgroudColor={data.backgroudColor}
            titleColor={data.titleColor}
            key={index}
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
      </AboutMeWrap>
    </>
  );
};

export default AboutMe;
