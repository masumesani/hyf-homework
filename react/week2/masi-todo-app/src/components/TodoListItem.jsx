import React from "react";
import { Checkbox, IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoListItem = (props) => {
  return (
    <div className="container">
      <div className="row m-4 ">
        <div className="col-1">
          <Checkbox
            checked={props.todo.done}
            onChange={() => props.onToggle(props.todo.id)}
            color="secondary"
          />
        </div>
        <div className="col-10 my-auto">
          <Typography
            className="text-left"
            style={{
              textDecoration: props.todo.done ? "line-through" : "none",
            }}
          >{`${props.todo.title}, ${props.todo.date.toDateString()} 
         `}</Typography>
        </div>
        <div className="col-1 my-auto">
          <IconButton
            onClick={() => props.onDelete(props.todo.id)}
            variant="contained"
            color="secondary"
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
