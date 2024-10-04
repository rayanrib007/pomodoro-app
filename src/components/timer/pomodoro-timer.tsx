import React, { useEffect, useState } from "react";

import { useInterval } from "../../hooks/use-interval";
import { Button, Timer } from "../generals/CUiLib";
import { IPomodoroTimerProtocol } from "../../interfaces/ITimer";

export function PomodoroTimer(props: IPomodoroTimerProtocol) {
  const [mainatime, setMainTime] = useState(props.pomodoroTime);
  const [timeCouting, setTimeCouting] = useState(false);
  const [working, SetWotking] = useState(false);
  const [resting, SetResting] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainatime - 1);
    },
    timeCouting ? 1000 : null,
  );

  const configuredWork = () => {
    setTimeCouting(true);
    SetWotking(true);
    SetResting(false);
    setMainTime(props.pomodoroTime);
  };

  const configuredRest = (long: boolean) => {
    setTimeCouting(true);
    SetWotking(false);
    SetResting(true);

    if (long) setMainTime(props.longRestTime);
    else setMainTime(props.shortRestTime);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainatime} />
      <div className="controls">
        <Button text="Work" onclick={() => configuredWork()} />
        <Button
          className={!working && !resting ? "hidden" : ""}
          text={timeCouting ? "Pause" : "Play"}
          onclick={() => setTimeCouting(!timeCouting)}
        />
        <Button text="Rest" onclick={() => configuredRest(false)} />
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
