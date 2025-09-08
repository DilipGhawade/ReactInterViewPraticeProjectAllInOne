import { useState } from "react";

export const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h1>Toggle {isOn ? "On" : "OFF"}</h1>
      <button onClick={(e) => setIsOn(!isOn)}>
        {isOn ? "Turn On" : "Turn OFF"}
      </button>
    </>
  );
};
