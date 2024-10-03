import React from "react";
import { ButtonGenericProtocol } from "../../interfaces/IUi";
import { secondsToTime } from "../../utils/second-to-time.";

export function Button(props: ButtonGenericProtocol) {
  return (
    <button className={props.className} onClick={props.onclick}>
      {props.text}
    </button>
  );
}

export function Timer({ mainTime }: { mainTime: number }) {
  return <div className="timer">{secondsToTime(mainTime)}</div>;
}
