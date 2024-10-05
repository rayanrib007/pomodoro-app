/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useEffect, useState } from "react";

import { useInterval } from "../../hooks/use-interval";
import { Button, Timer } from "../generals/CUiLib";
import { IPomodoroTimerProtocol } from "../../interfaces/ITimer";
import { secondsToTime } from "../../utils/second-to-time.";

const bellStart = require("../../sounds/src_sounds_bell-start.mp3");
const bellFinish = require("../../sounds/src_sounds_bell-finish.mp3");

const audioStartWorking = new Audio(bellStart);
const audioFinishworking = new Audio(bellFinish);

export function PomodoroTimer(props: IPomodoroTimerProtocol) {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCouting, setTimeCouting] = useState(false);
  const [working, SetWotking] = useState(false);
  const [resting, SetResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(props.cycles - 1).fill(true),
  );
  const [completdCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoro, setNumberOfPomodoro] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCouting ? 1000 : null,
  );

  const configuredWork = () => {
    setTimeCouting(true);
    SetWotking(true);
    SetResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play();
  };

  const configuredRest = (long: boolean) => {
    setTimeCouting(true);
    SetWotking(false);
    SetResting(true);
    audioFinishworking.play();
    if (long) setMainTime(props.longRestTime);
    else setMainTime(props.shortRestTime);
  };
  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");
    console.log(mainTime);

    if (mainTime >= 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configuredRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configuredRest(true);
      setCompletedCycles(completdCycles + 1);
      setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
    }
    if (working) {
      console.log("v");
      setNumberOfPomodoro(numberOfPomodoro + 1);
    }
    if (resting) {
      console.log("t");
      configuredWork();
    }
  }, [
    working,
    resting,
    mainTime,
    configuredRest,
    setCyclesQtdManager,
    configuredWork,
    cyclesQtdManager,
    numberOfPomodoro,
    props.cycles,
    completdCycles,
  ]);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
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
        <p>Ciclos concluídos: {completdCycles}</p>
        <p>Horas Trabalhadas: {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros Concluídos: {numberOfPomodoro}</p>
      </div>
    </div>
  );
}
