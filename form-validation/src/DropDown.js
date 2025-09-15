import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

export const DropDown = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const { data, loading, error } = useFetch(url);
  const [select, setSelect] = useState("");

  return (
    <>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option>Select Post</option>
        {data && data.map((post) => <option>{post.title}</option>)}
      </select>
    </>
  );
};
