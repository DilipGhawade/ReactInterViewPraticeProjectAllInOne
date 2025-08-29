import { useEffect, useState } from "react";

import { useDebounce } from "./hooks/useDebounce";

export default function SearchBox({ onSearch }) {
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 500);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <input
      type="text"
      onChange={(e) => setInput(e.target.value)}
      value={input}
      placeholder="Start searching..."
    />
  );
}
