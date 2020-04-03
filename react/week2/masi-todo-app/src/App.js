import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import MyTodoList from "./components/MyTodoList";
import { Typography } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container text-center">
      <Typography variant="h1" className="pb-4 pt-5" style={{ fontSize: 40 }}>
        My Todo List
      </Typography>
      <Timer />
      <MyTodoList />
    </div>
  );
}

export default App;
