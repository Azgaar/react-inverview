// Implement a countdown timer that takes a number of seconds and counts down to zero
// Implement start, pause, and reset functionalities for the timer

import "./timer.css";

export const Timer1 = () => {
  const time = 30;

  return (
    <div className="timer">
      <h3>Countdown Timer</h3>
      <div className="controls">
        <input type="number" />
        <button>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
      <div className="countdown">{time}</div>
    </div>
  );
};
