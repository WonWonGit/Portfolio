import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import GlobalStyle from "./src/style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./src/style/StyledType";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <div>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </div>
  );
};
