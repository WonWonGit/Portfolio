import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.colors?.background};
  height: auto;
`;

interface PropsType {
  children: ReactNode[];
}

const Layout = ({ children }: PropsType) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
