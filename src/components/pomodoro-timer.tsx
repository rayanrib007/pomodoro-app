import React, { useState } from "react";
import { useInterval } from "../hooks/use-interval";

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props) {
  const [mainatime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainatime - 1);
  }, 1000);

  return <div>{mainatime}</div>;
}
