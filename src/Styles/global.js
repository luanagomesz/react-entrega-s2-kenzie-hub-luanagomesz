import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  outline: 0;
}
:root{
    --white: #ffffff;
    --blue: #403CAA;
    --green:#11995E;
    --grey-100:#333333;
    --grey-50:#999999;
    --grey-0:#F5F5F5;

}

body{
    background: var(---grey-0);
    color: var(---grey-100);
    font-family: 'Inter', sans-serif;
}
h1,h2, h3, h4, span, button, div, input{
  font-family: 'Inter', sans-serif;;
} 
h1,h2, h3, h4{
    font-weight:bold;
}

button{
    cursor: pointer;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
}
a{
    text-decoration: none;
}
`;

export default GlobalStyle;
