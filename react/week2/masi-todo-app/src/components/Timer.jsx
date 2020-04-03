import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

const Timer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setElapsedTime(elapsedTime + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [elapsedTime]);

  return (
    <Typography>You have used {elapsedTime} seconds on this website</Typography>
  );
};

export default Timer;
