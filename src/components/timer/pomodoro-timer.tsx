import React, { useState } from "react";

import { useInterval } from "../../hooks/use-interval";
import { Button, Timer } from "../generals/CUiLib";

export function PomodoroTimer({
  defaultPomodoroTime,
}: {
  defaultPomodoroTime: number;
}) {
  const [mainatime, setMainTime] = useState(defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainatime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainatime} />
      <Button text="Start" onclick={() => console.log("start")} />
    </div>
  );
}
