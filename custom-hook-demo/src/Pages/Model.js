import { useState } from "react";

function Model() {
  const [isOpen, setOpen] = useState(false);
  const handleOutsideClick = (e) => {
    e.preventDefault();
    if (e.target.value === "model") {
      setOpen(false);
    }
  };

  return (
    <>
      <h1>Model Example</h1>
      <button onClick={(e) => setOpen(true)}>Open Model</button>
      <div className="model" onClick={handleOutsideClick}></div>
      <button onClick={(e) => setOpen(false)}>Close</button>
      {isOpen && (
        <>
          <h1>Model Title</h1>
        </>
      )}
    </>
  );
}

export default Model;
