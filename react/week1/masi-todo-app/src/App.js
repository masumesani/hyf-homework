import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyTodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container text-center">
      <h1 className="pb-4 pt-5">My Todo List</h1>
      <MyTodoList />
    </div>
  );
}

export default App;
