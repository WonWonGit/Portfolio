import "styled-components";
import { ColorTypes, DeviceTypes } from "../style/StyledType";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorTypes;
    device: DeviceTypes;
  }
}
