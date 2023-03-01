import React from "react";
import styled, { keyframes } from "styled-components";

const CircleRotate = keyframes`
   0%{
    transform: rotate(0deg) translate(300px) rotate(0deg);
  }
  100%{
    transform: rotate(360deg) translate(300px) rotate(-360deg);
  }
`;

const CircleRotat2 = keyframes`
   0%{
    transform: rotate(0deg) translate(-300px) rotate(0deg);
  }
  100%{
    transform: rotate(360deg) translate(-300px) rotate(-360deg);
  }
`;

const CircleTextRotate2 = keyframes`
   0%{
    transform: rotate(0deg) translate(100px) rotate(0deg);
  }
  100%{
    transform: rotate(360deg) translate(100px) rotate(-360deg);
  }
`;

const CircleRotat3 = keyframes`
   0%{
    transform: rotate(0deg) translate(300px) rotate(0deg);
  }
  100%{
    transform: rotate(360deg) translate(300px) rotate(-360deg);
  }
`;

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const TextRotate = keyframes`
from {
    transform: rotate(-0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const ImgRotation = keyframes`
     from {
    -webkit-transform: rotate(180deg);
  }
  to {
    -webkit-transform: rotate(90deg);
  }
`;

const Strength = styled.div`
  position: absolute;
  width: 150px;
  /* right: 0; */
`;

const StrengthDiv = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  transform-origin: center;
  justify-content: center;
  /* animation: ${Rotate} 25s reverse infinite; */
  background: gray;
`;

const StrengthRound = styled.div`
  width: 70px;
  height: 70px;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  /* animation: ${Rotate} 25s reverse infinite; */
`;

const AboutMeRoundOutside = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors?.fontColor};
  animation: ${Rotate} 25s infinite;

  ${StrengthRound}:first-child {
    top: -35px;
    transform: translate(0, -50%);
    transform-origin: center;
    animation: ${TextRotate} 25s infinite;
    /* animation: ${Rotate} 25s reverse infinite; */

    /* ${Strength} {
      top: 20%;
      animation: ${TextRotate} 25s infinite;
    } */
  }

  ${StrengthRound}:nth-child(2) {
    right: -35px;
    transform: translate(50%, 0px);
    animation: ${TextRotate} 25s infinite;
    /* animation: ${Rotate} 25s reverse infinite; */

    /* ${Strength} {
      left: 0;
      transform: translate(-40%, 0);
    } */
  }

  ${StrengthRound}:nth-child(3) {
    bottom: -35px;
    transform: translate(0, -50%);
    animation: ${TextRotate} 25s infinite;
    /* animation: ${Rotate} 25s reverse infinite; */

    /* ${Strength} {
      bottom: 20%;
    } */
  }

  ${StrengthRound}:nth-child(4) {
    /* left: 100%; */
    left: -35px;
    transform: translate(-50%, 0);
    animation: ${TextRotate} 25s infinite;
    /* animation: ${Rotate} 25s reverse infinite; */

    ${Strength} {
      right: 0;
      transform: translate(40%, 0px);
    }
  }
`;

const AboutMeRoundInside = styled.div`
  width: 300px;
  background: ${(props) => props.theme.colors?.fontColor};
  height: 300px;
  border-radius: 50%;
  font-family: "Barbra";
  top: 0%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
  text-align: center;
`;

const AboutMeWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const AboutMeContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AboutMeRoundWrap = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  margin: 0 auto;
`;

const strenth = ["Communication", "Positive", "Self Study", "Planning"];

const AboutMeRound = () => {
  return (
    <AboutMeWrap>
      <AboutMeContentWrap>
        <AboutMeRoundWrap>
          <AboutMeRoundOutside>
            {strenth.map((strenth: string, index: number) => (
              <StrengthRound key={index}>
                <Strength key={index}>{strenth}</Strength>
              </StrengthRound>
            ))}
          </AboutMeRoundOutside>
          <AboutMeRoundInside>
            <div>This is my Strength</div>
          </AboutMeRoundInside>
        </AboutMeRoundWrap>
        <div>test</div>
      </AboutMeContentWrap>
    </AboutMeWrap>
  );
};

export default AboutMeRound;
