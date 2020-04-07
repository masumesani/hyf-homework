import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const AddTodo = (props) => {
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <TextField
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
        variant="outlined"
        style={{ marginRight: 10 }}
        size="small"
        className="mt-1"
      />
      <IconButton
        onClick={() => props.onAdd(todoText)}
        variant="contained"
        color="secondary"
      >
        <Add />
      </IconButton>
    </div>
  );
};
export default AddTodo;
