import React from "react";
import * as Styled from "./StyledThemeToggle";
import {
  CustomSpanSlider,
  CustomToggleInput,
  CustomToggleLabel,
  CustomToggleSwitch,
} from "./StyledThemeToggle";

const ThemeToggle = ({ click, themeMode }: Iprops) => {
  return (
    <CustomToggleSwitch>
      <CustomToggleLabel>
        <CustomToggleInput
          onChange={click}
          checked={themeMode === "dark" ? true : false}
        />
        <CustomSpanSlider />
      </CustomToggleLabel>
    </CustomToggleSwitch>
  );
};

export default ThemeToggle;

interface Iprops {
  click: () => void;
  themeMode: string;
}
