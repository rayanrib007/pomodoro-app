import React from "react";

import { PomodoroTimer } from "./components/timer/pomodoro-timer";

function App() {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={7261}
        shortRestTime={300}
        longRestTime={600}
        cycles={4}
      />
    </div>
  );
}

export default App;
