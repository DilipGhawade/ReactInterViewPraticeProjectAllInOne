import React from "react";
const Gretting = ({ name }) => {
  console.log("Greeting component rendered");
  return <h1>Hello, {name}</h1>;
};

export default React.memo(Gretting);
