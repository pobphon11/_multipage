import "./timer.css";
import { useEffect, useState } from "react";

function Timer() {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null
    if (running) {
        interval = setInterval(() => {
            setSeconds(seconds + 1)
        },1000)
    }
    return () =>  clearInterval(interval)
    
  },[running, seconds]);
  function runClick() {
    setRunning(!running);
  }

function resetClick() {
    setRunning(false);
    setSeconds(0);
  }



  function secondsToString(seconds) {
    const minutes_seconds = 60;
    const hours_seconds = minutes_seconds * 60;
    const days_seconds = hours_seconds * 24;

    const days = Math.floor(seconds / days_seconds);
    const hours = Math.floor((seconds % days_seconds) / hours_seconds);
    const minutes = Math.floor((seconds % hours_seconds) / minutes_seconds);
    const secs = seconds % minutes_seconds;

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${secs}s`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  }

  return (
    <div className="timer-container">
      <h3 className="timer-title">Timer</h3>
      <p>
        <input
          className="timer-display"
          type="text"
          readOnly={true}
          value={secondsToString(seconds)}
        />
      </p>
      <div className="timer-bunttons">
        <button className="btn btn-danger" onClick={resetClick}>Reset</button>
        <button
          className={"btn " + (running ? "btn-warning" : "btn-success")}
          onClick={runClick}
        >
          {running ? "Pause" : "Run"}
        </button>
      </div>
    </div>
  );
}

export default Timer;
