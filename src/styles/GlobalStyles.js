import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  //import google font
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 1.15em;
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;