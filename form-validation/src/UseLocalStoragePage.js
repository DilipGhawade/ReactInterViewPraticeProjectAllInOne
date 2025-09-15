import { useLocalStorage } from "./hooks/useLocalStorage";

export const UseLocalStoragePage = () => {
  const [input, setInput] = useLocalStorage("name", "dilip");
  return (
    <>
      <h1>Custom Local Storage Hook Example</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <h1>Name : {input}</h1>
    </>
  );
};
