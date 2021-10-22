import { createGlobalStyle } from "styled-components";

export const GlobalComponents = createGlobalStyle`
 
* {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 font-family: "Rubik", sans-serif;
}

.App {
 background-color: ${({ theme }) => theme.appBody};
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 align-items: center;
}

`;
