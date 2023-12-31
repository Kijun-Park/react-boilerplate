import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    display: "flex";
    justify-content: "flex-start";
    align-items: "center";
    background-color: ${(props) => props.theme.color.background};
    margin: 0;
  }
`;
