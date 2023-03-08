import styled, { keyframes } from "styled-components";

export const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RoundWrap = styled.div`
  position: sticky;
  top: 100px;

  ${(props) => props.theme?.device.tablet} {
    width: 100%;
    height: 50vh;
    display: flex;
    position: sticky;
    z-index: 999;
    top: 0%;
    background-color: ${(props) => props.theme?.colors.background};
  }
`;

export const TextRotate = keyframes`
from {
    transform: rotate(-0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

export const Strength = styled.div`
  position: absolute;
  width: 150px;
`;

export const StrengthRound = styled.div`
  width: 70px;
  height: 70px;
  background: white;
  border-radius: 50%;
  position: absolute;

  &.active {
    background: #ff7400;
    transition: 1s;
  }
`;

export const AboutMeRoundOutside = styled.div`
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
  }

  ${StrengthRound}:nth-child(2) {
    right: -35px;
    transform: translate(50%, 0px);
    animation: ${TextRotate} 25s infinite;
  }

  ${StrengthRound}:nth-child(3) {
    bottom: -35px;
    transform: translate(0, -50%);
    animation: ${TextRotate} 25s infinite;
  }

  ${StrengthRound}:nth-child(4) {
    left: -35px;
    transform: translate(-50%, 0);
    animation: ${TextRotate} 25s infinite;

    ${Strength} {
      right: 0;
      transform: translate(40%, 0px);
    }
  }

  ${(props) => props.theme?.device.tablet} {
    width: 400px;
    height: 400px;
  }
`;

export const AboutMeRoundInside = styled.div`
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
  color: ${(props) => props.theme?.colors.background};
  text-align: center;

  ${(props) => props.theme?.device.tablet} {
    top: -50px;
    width: 250px;
    height: 250px;
    font-size: 2rem;
  }

  ${(props) => props.theme?.device.mobile} {
    width: 200px;
    height: 200px;
    transform: translate(-50%, 70%);
  }
`;

export const AboutMeWrap = styled.div`
  width: 100%;
  margin: 200px auto;

  ${(props) => props.theme?.device.tablet} {
    position: relative;
    height: 500vh;
    margin-bottom: 500px;
  }
`;

export const AboutMeContentWrap = styled.div`
  width: 100%;
  flex-direction: column;
  height: 4000px;
  transform: cubic-bezier(0, 0, 0.2, 1);
`;

export const AboutMeRoundWrap = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  margin: 0 auto;
  position: sticky;
  transition: 0.5s;
  top: 100px;

  ${(props) => props.theme?.device.tablet} {
    transform: scale(0.8);
    margin: 0;
    height: 0;
    top: 20%;
  }

  ${(props) => props.theme?.device.mobile} {
    transform: scale(0.5);
  }

  &.left {
    /* margin: 0; */
    transition: 0.5s;
    transform: scale(0.5) translateX(60%);

    ${(props) => props.theme?.device.tablet} {
      transform: scale(0.5);
      margin: 0;
    }

    ${(props) => props.theme?.device.mobile} {
      transform: scale(0.5);
      margin: 0;
    }
  }
  &.small {
    transition: 0.5s;
    transform: scale(0.6) translateX(60%);
    ${(props) => props.theme?.device.tablet} {
      transform: scale(0.4) translateX(-50%) translateY(150%);
    }
    ${(props) => props.theme?.device.mobile} {
      transform: scale(0.4) translateX(-50%) translateY(150%);
    }
  }
`;

export const AboutMeStrenth = styled.div`
  height: 500px;
  width: 45%;

  ${(props) => props.theme?.device.tablet} {
    width: 100%;
    margin-bottom: 200px;
    padding: 20px;
  }

  ${(props) => props.theme?.device.mobile} {
    padding: 20px;
  }

  &.fadeOut {
    opacity: 0;
    transition-delay: 0.2s;
    transition-duration: 1s;

    ${(props) => props.theme?.device.mobile} {
      opacity: 1;
    }
  }

  &.fadeIn {
    opacity: 1;
    transition: cubic-bezier(0, 0, 0.2, 1);
    transition-delay: 0.1s;
    transition-duration: 1s;
    transform: translate3d(0, 0, 0);

    ${(props) => props.theme?.device.mobile} {
      transition-delay: 0.1s;
    }
  }
`;

export const AboutMeStrengWrap = styled.div`
  padding: 200px;
  transform: translateY(-30%);

  ${(props) => props.theme?.device.tablet} {
    padding: 120px;
    transform: translateY(10%);
  }

  ${(props) => props.theme?.device.mobile} {
    padding: 10px;
  }
`;

export const AboutMeEnd = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 500px;

  ${(props) => props.theme?.device.mobile} {
    margin-top: 0px;
  }
`;

export const AboutMeStart = styled.div`
  width: 100%;
  height: 500px;

  ${(props) => props.theme?.device.mobile} {
    height: 200px;
  }
`;

export const StrengthTitle = styled.div`
  font-family: "Barbra";
  color: ${(props) => props.theme?.colors.pointColor};
  font-size: 3rem;
  padding-bottom: 20px;

  ${(props) => props.theme?.device.tablet} {
    font-size: 2rem;
  }
`;

export const StrengthContent = styled.div`
  line-height: 30px;
  color: ${(props) => props.theme?.colors.fontColor};
`;
