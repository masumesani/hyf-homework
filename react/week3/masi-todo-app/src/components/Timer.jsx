import React, { Component } from "react";
import { Typography } from "@material-ui/core";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { elapsedTime: 0 };
    this.timer = 0;
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ elapsedTime: this.state.elapsedTime + 1 });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.elapsedTime !== this.state.elapsedTime) {
      this.timer = setTimeout(() => {
        this.setState({ elapsedTime: this.state.elapsedTime + 1 });
      }, 1000);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    return (
      <Typography>
        You have used {this.state.elapsedTime} seconds on this website
      </Typography>
    );
  }
}

export default Timer;
