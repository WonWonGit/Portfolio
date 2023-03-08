import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import GlobalStyle from "./src/style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./src/style/StyledType";
import ThemeToggle from "./src/components/theme/ThemeToggle";
import useTheme from "./src/components/theme/useTheme";
import useLan from "./src/hooks/useLan";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  const [themeMode, toggleTheme] = useTheme(); // hook 함수 하용
  const mode = themeMode === "dark" ? DarkTheme : LightTheme;

  return (
    <div>
      <ThemeProvider theme={mode}>
        <GlobalStyle />
        {element}
        <ThemeToggle
          click={toggleTheme as () => void}
          themeMode={themeMode as string}
        ></ThemeToggle>
      </ThemeProvider>
    </div>
  );
};
