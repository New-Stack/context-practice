import React from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./components/todoTemplate/Template";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>안녕하세요</Template>
    </>
  );
}

export default App;
