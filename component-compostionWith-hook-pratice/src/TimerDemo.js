import { useEffect, useState } from "react";

export const Timer = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((s) => s + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1>Timer Demo </h1>
      <h3>Time is {second}</h3>
    </>
  );
};
