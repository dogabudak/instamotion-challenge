import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    line-height: 1;
  }

  a, a:visited {
    color: inherit;
    text-decoration: inherit;
  }

  body {
    background: #ffffff;
  }
`;
