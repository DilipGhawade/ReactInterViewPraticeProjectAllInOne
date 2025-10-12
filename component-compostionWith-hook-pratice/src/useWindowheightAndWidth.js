import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UseContextDemo";

export const useWindowheightAndWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const user = useContext(UserContext);
  console.log(
    `user data form context api for global state => ${JSON.stringify(
      user.name
    )}`
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { height, width };
};
