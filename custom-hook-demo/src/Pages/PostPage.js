import { useState } from "react";
import { useFetch } from "../CustomHooks/useFetch";

export const PostPage = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const { data, loading, error } = useFetch(url);
  const [select, setSelect] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Post Page Using DropDown</h1>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option key={1}>Select The Post</option>
        {data?.map((post) => (
          <option key={post.id}>{post.title}</option>
        ))}
      </select>
    </>
  );
};
