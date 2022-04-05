import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;

    *::placeholder, * {
      font-family: 'Nunito', sans-serif;;
    }

    
  }
`;

export default GlobalStyle;
