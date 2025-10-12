import { useEffect, useRef, useState } from "react";

export const Timer = ({ initalValue }) => {
  const [time, setTime] = useState(initalValue);
  const [isRunning, setRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => (prev -= 1));
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, time]);

  // stop automatically at 0

  useEffect(() => {
    if (time === 0) {
      setRunning(false);
      clearInterval(intervalRef.current);
    }
  }, [time]);

  const handleStop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };
  return (
    <>
      <h1>Time: {time}</h1>
      <button onClick={handleStop}>Stop Timer</button>
    </>
  );
};
