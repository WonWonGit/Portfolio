import { StarDivLeft, StarDivRight, StyledBannerTitle } from "../StyledCommon";
import React from "react";
import styled from "styled-components";
import { SubBannerWrap } from "./StyledSubBanner";
import Star from "../../images/star.png";

interface SubBannerPropsType {
  title: string;
  page: string;
}

const SubBanner = ({ title, page }: SubBannerPropsType) => {
  return (
    <SubBannerWrap page={page}>
      <StyledBannerTitle>
        <StarDivLeft src={Star} />
        <div className="subTitle">{title}</div>
        <StarDivRight src={Star} />
      </StyledBannerTitle>
    </SubBannerWrap>
  );
};

export default SubBanner;
