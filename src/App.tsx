import React from "react";
import { createGlobalStyle } from "styled-components";
import Head from "./components/todoHead/Head";
import TodoList from "./components/todoList/TodoList";
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
        <TodoList />
      </Template>
    </>
  );
}

export default App;
