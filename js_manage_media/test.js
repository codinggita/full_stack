// implement a timer in react
// start, pause, reset, restart
import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setInterval(() => {
        setTime((prevA) => prevA + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isActive]);

  return (
    <>
      <h1>Timer: {time}</h1>
      <button onClick={() => setIsActive(true)}>Start</button>
      <button onClick={() => setIsActive(false)}>Pause</button>
      <button onClick={() => {setTime(0);setIsActive(false);}}>Reset</button>
      <button onClick={() => {setTime(0);setIsActive(true);}}>Restart</button>
    </>
  );
}

export default Timer;

