import { useCallback, useMemo } from "react";

export const ExpensiveComponent = ({ numbers }) => {
  const memoziedSum = useMemo(() => {
    return numbers.reduce((n) => n * 2);
  }, [numbers]);
  const memoziedCallback = useCallback(
    () => console.log(`this function is memozied`),
    []
  );

  return <div>Mutltiplication {memoziedSum}</div>;
};
