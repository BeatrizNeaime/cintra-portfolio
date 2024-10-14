import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: radial-gradient(circle, rgba(9,20,40,1) 0%, rgba(10,20,40,1) 100%);
    font-family: "Source Sans 3", system-ui;
  }
  
`;
