import React from "react";
import { createGlobalStyle } from "styled-components";
import Create from "./components/todoCreate/Create";
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
        <Create />
      </Template>
    </>
  );
}

export default App;
