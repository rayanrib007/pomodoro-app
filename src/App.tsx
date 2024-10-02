import React from "react";

import { PomodoroTimer } from "./components/pomodoro-timer";

function App() {
  return (
    <div>
      <PomodoroTimer defaultPomodoroTime={3600} />
    </div>
  );
}

export default App;
