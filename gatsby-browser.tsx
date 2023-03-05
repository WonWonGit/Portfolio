import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import GlobalStyle from "./src/style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./src/style/StyledType";
import ThemeToggle from "./src/components/theme/ThemeToggle";
import useTheme from "./src/components/theme/useTheme";

// export const onInitialClientRender = () => {
//   const loader = document.getElementById("___loader");
//   if (loader != null) {
//     setTimeout(function () {
//       loader.style.transition = ".5s";
//       loader.style.opacity = "0";
//       loader.style.display = "none";
//     }, 200);
//   }
// };

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
