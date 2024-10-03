import React, { useState } from "react";

import { useInterval } from "../../hooks/use-interval";
import { Button, Timer } from "../generals/CUiLib";
import { IPomodoroTimerProtocol } from "../../interfaces/ITimer";

export function PomodoroTimer(props: IPomodoroTimerProtocol) {
  const [mainatime, setMainTime] = useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainatime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainatime} />
      <div className="controls">
        <Button text="teste" onclick={() => console.log("start")} />
      </div>
      <div className="details">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        perspiciatis facere, voluptates et recusandae quos corporis laudantium
        soluta harum consectetur, voluptas obcaecati in! Placeat deleniti
        nostrum beatae laborum et quae.
      </div>
    </div>
  );
}
