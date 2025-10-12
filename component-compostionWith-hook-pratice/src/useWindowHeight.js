import { useEffect, useState } from "react";

export const useWindowHeight = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResizeHeight = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResizeHeight);
    return () => window.removeEventListener("resize", handleResizeHeight);
  }, []);

  return height;
};
