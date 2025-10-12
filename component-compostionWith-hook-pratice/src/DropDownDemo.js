import { useState } from "react";
import { useFetch } from "./useFetch";

const DropDownDemo = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [selected, setSelected] = useState("");

  if (loading) return <h1>Loading data.....</h1>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option>Select Post</option>
        {data &&
          data.map((post) => <option key={post.id}>{post.title}</option>)}
      </select>
    </>
  );
};

export default DropDownDemo;
