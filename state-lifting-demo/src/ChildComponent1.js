const ChildComponent1 = ({ count, onIncrement }) => {
  return (
    <>
      <h1>State Lifting Child componet 1</h1>
      <h3>Count in child component 1 {count}</h3>
      <button onClick={onIncrement}>Increment</button>
    </>
  );
};

export default ChildComponent1;
