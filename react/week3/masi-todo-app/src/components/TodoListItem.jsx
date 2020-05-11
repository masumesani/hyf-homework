import React, { Component } from "react";
import { Checkbox, IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import PropTypes from 'prop-types';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.todo.editing ? <div>
        <TextField variant="outlined"
          value={this.props.todo.title}//
          onChange={(event) => {
            this.props.onChange(event.target.value)

          }}
          style={{ marginRight: 10 }}
          label="What is the plan?"
          size="small"
          className="mt-1" />
        <IconButton
          onClick={() => {
            console.log(this.props.todo)
            this.props.onSave(this.props.todo.id, this.props.todo.title)
          }}//
        > <Add /></IconButton>
      </div> :
        <div className="container">
          <div className="row m-4 ">
            <div className="col-1">
              <Checkbox
                checked={!!this.props.todo.done} //this should be !! because if we do not do this then it might apply undefined to the component value and this makes the component un-cntrolled. this is not a bad thing by itself, the only problem is we cannot change a component controllability during runtime. by applying !! we make sure that this component would always be controlled.
                onChange={() => this.props.onToggle(this.props.todo.id)}
                color="secondary"
              />
            </div>
            <div className="col-10 my-auto">
              <Typography
                onClick={() => this.props.onEditStarted(this.props.todo.id)}
                className="text-left"
                style={{
                  textDecoration: this.props.todo.done ? "line-through" : "none",
                }}
              >{`${this.props.todo.title}, ${this.props.todo.date.toDateString()} 
           `}</Typography>
            </div>
            <div className="col-1 my-auto">
              <IconButton
                onClick={() => this.props.onDelete(this.props.todo.id)}
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
  }
}

export default TodoListItem;

TodoListItem.propTypes = {
  onSave: PropTypes.func,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
  onEditStarted: PropTypes.func,
  todo: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    done: PropTypes.bool,
    editing: PropTypes.bool
  })
}
