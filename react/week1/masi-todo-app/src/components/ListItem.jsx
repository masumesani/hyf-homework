import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const ListItem = props => {
  return (
    <div className="container ">
      <div className="row">
        <Checkbox
          checked={props.todo.done}
          onChange={() => props.onChange(props.todo.id)}
        />
        <p
          style={{ textDecoration: props.todo.done ? "line-through" : "none" }}
        >
          {` ${props.todo.title}, ${props.todo.date.toDateString()}`}
        </p>
      </div>
    </div>
  );
};

export default ListItem;
