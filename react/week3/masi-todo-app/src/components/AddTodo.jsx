import React, { Component } from "react";
import DateAndTimePickers from "./DateAndTimePickers";
import { TextField, IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      date: new Date(),
    };
  }

  render() {
    return (
      <div>
        <TextField
          onChange={(event) => {
            this.setState({ todoText: event.target.value });
          }}
          variant="outlined"
          style={{ marginRight: 10 }}
          label="What is the plan?"
          size="small"
          className="mt-1"
        />
        <DateAndTimePickers
          className="mt-1"
          onChange={(event) => {
            this.setState({ date: new Date(event) });
          }}
        />
        <IconButton
          onClick={() => this.props.onAdd(this.state.todoText, this.state.date)}
          variant="contained"
          color="secondary"
        >
          <Add />
        </IconButton>
      </div>
    );
  }
}

export default AddTodo;
