import React, { useState } from "react";

const ListKeysDemo = () => {
  const fruits = ["banana", "mango", "pinaple", "orange", "apple"];

  const [items, setItems] = useState(fruits);
  const reverseItem = () => {
    setItems([...fruits].reverse());
  };

  return (
    <>
      <ul>
        {items.map((fruit) => (
          <li key={fruit}>Fruit : {fruit}</li>
        ))}
      </ul>
      <button onClick={reverseItem}>Reverse</button>
    </>
  );
};

export default ListKeysDemo;
