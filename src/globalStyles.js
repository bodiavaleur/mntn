import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body, #root {
    height: 100%;
  }

  #root {
    background: #0B1D26;
    overflow: hidden;
  }

  @media (min-width: ${theme.breakpoints.desktophd}) {
    html {
      font-size: 28px;
    }
  }
`;
