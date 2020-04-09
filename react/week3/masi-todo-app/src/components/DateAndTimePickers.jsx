import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class DateAndTimePicker extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TextField onChange={(event) => {
        this.props.onChange(event.target.value)
      }}
        variant="outlined"
        size="small"
        id="datetime-local"
        label="DeadLine"
        type="datetime-local"
        defaultValue={new Date().toISOString().split(".")[0]}
        className="mt-1 mr-3"
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
  }
}

export default DateAndTimePicker;