import styled from "styled-components";
import { Fade } from "../StyledCommon";

export const StyledBanner = styled.div`
  height: 500px;
  width: 80%;
  margin: 0 auto;
  position: relative;
  animation: ${Fade} 2s forwards;
`;

export const StyledBannerImg = styled.div`
  width: 250px;
  border-radius: 50%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: bottom;
  background-image: url("https://img.freepik.com/free-photo/fluffy-clouds-on-a-blue-sky_23-2148824915.jpg");

  ${(props) => props.theme.device?.mobile} {
    width: 190px;
    height: 55%;
  }
`;
