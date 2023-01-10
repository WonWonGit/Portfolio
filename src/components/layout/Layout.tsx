import React, { ReactNode } from "react";
import { StyledLayout } from "./StyledLayout";

interface PropsType {
  children: ReactNode[];
}

const Layout = ({ children }: PropsType) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
