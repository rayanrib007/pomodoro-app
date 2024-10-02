import React, { useState } from "react";

import { useInterval } from "../hooks/use-interval";
import { secondsToTime } from "../utils/second-to-time.";

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props) {
  const [mainatime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainatime - 1);
  }, 1000);

  return <div>{secondsToTime(mainatime)}</div>;
}
