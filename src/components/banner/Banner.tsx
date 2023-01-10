import React from "react";
import { StyledBannerTitle, StarDivLeft, StarDivRight } from "../StyledCommon";
import { StyledBanner, StyledBannerImg } from "./StyledBanner";
import Star from "../../images/star.png";

const Banner = () => {
  return (
    <StyledBanner>
      <StyledBannerTitle>
        <StarDivLeft src={Star} />
        <div className="main">Portfolio</div>
        <StarDivRight src={Star} />
      </StyledBannerTitle>
      <StyledBannerImg></StyledBannerImg>
    </StyledBanner>
  );
};

export default Banner;
