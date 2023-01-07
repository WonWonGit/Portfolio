import { StarDivLeft, StarDivRight, StyledBannerTitle } from "./StyledCommon";
import Star from "../images/star.png";
import React from "react";
import styled from "styled-components";

const SubBannerWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors?.pointColor};
  font-size: 6rem;
  font-family: "Barbra";
  color: whitesmoke;
  padding: 100px 0;
`;

interface SubBannerPropsType {
  title: string;
}

const SubBanner = ({ title }: SubBannerPropsType) => {
  return (
    <SubBannerWrap>
      <StyledBannerTitle>
        <StarDivLeft src={Star} />
        <div className="subTitle">{title}</div>
        <StarDivRight src={Star} />
      </StyledBannerTitle>
    </SubBannerWrap>
  );
};

export default SubBanner;
