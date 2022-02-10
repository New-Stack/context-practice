import React from "react";
import { createGlobalStyle } from "styled-components";
import Head from "./components/todoHead/Head";
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
      <Template>
        <Head />
      </Template>
    </>
  );
}

export default App;
