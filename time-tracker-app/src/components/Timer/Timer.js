import React, { useState, useEffect } from 'react';
import './Timer.css';
import { formatTime } from '../../utils/timeUtils'; // Import the utility function

function Timer() {
  // 1. State Variables:
  //   - `isRunning`: Boolean (true/false) to track if the timer is running.
  //   - `elapsedTime`: Number to store the time elapsed in seconds.
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  // 2. useEffect Hook:
  //    - This hook runs after every render.
  //    - We use it here to update the timer every second.
  useEffect(() => {
    let intervalId;

    // If the timer is running, set up an interval.
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000); // Update every 1000ms (1 second)
    }

    // Cleanup Function:
    //   - This function runs when the component unmounts or before the effect runs again.
    //   - We use it to clear the interval when the timer is stopped or the component unmounts.
    return () => clearInterval(intervalId);
  }, [isRunning]); // Re-run this effect when `isRunning` changes.

  // 3. Event Handlers:
  //   - `handleStartStop`: Toggles the `isRunning` state.
  //   - `handleReset`: Resets the `elapsedTime` to 0 and stops the timer.
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  // 4. JSX (Return Value):
  //   - This is what the component renders.
  return (
    <div className="timer">
      <div className="timer__display">{formatTime(elapsedTime)}</div> {/* Use the utility function */}
      <div className="timer__buttons">
        <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
