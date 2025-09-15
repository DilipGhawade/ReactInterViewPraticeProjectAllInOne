import { useState } from "react";

export const ToggleButton = () => {
  const [on, setOn] = useState(false);

  return (
    <>
      <h2>Toggle {on ? "ON" : "OFF"}</h2>
      <button onClick={() => setOn(!on)}>{on ? "Turn Off" : "Turn On"}</button>
    </>
  );
};
