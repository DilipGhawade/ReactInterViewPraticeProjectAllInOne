import { useMemo, useState } from "react";

export const UseMemoExample = () => {
  const [n, setN] = useState(0);
  const factorial = (n) => {
    console.log(`factorial called n is ${n}`);

    return n <= 0 ? 1 : n * factorial(n - 1);
  };

  const fact = useMemo(() => factorial(n), [n]);

  return (
    <>
      <h1>Factorial Using use memo </h1>
      <p> this is just sample demo on use memo for value </p>
      <input
        value={n}
        onChange={(e) => setN(e.target.value)}
        placeholder="Enter a number to find out the facorial"
      />

      <p>
        Factorial of {n} is : {fact}
      </p>
    </>
  );
};
