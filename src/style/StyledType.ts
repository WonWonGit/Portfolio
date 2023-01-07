const size = {
  mobile: "425px",
  mobileS: "320px",
  tablet: "768px",
  desktop: "1025px",
};

const device = {
  mobile: `@media screen and (max-width: ${size.mobile})`,
  mobileS: `@media screen and (max-width: ${size.mobileS})`,
  tablet: `@media screen and (max-width: ${size.tablet})`,
  desktop: `@media screen and (max-width: ${size.desktop})`,
};

const lightColors = {
  background: "#f5f5f5",
  fontColor: "#2b2a2a",
  pointColor: "#1763d3",
};

const darkColors = {
  background: "#404040",
  fontColor: "#f5f5f5",
  pointColor: "#1763d3",
};

export type DeviceTypes = typeof device;
export type ColorTypes = typeof lightColors | typeof darkColors;

const DefaultTheme = {
  device,
};

export const LightTheme = {
  ...DefaultTheme,
  colors: lightColors,
};

export const DarkTheme = {
  ...DefaultTheme,
  colors: darkColors,
};
