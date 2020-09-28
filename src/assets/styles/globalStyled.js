import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`


  :root {
    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
  }
 #__next,
  body,
  html{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #282A36;
    color: #F8F8F2;
    font-family: 'Rubik', sans-serif;
  }

  input,
  button, 
  textarea,
  select,
  option{
    outline: 0;
  }

`;

export default GlobalStyled;