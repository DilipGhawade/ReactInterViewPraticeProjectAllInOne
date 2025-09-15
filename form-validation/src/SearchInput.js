import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  //   const posts = ["apple", "banan", "mango"];

  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );
  const debounceSearch = (q) => {
    let timer;

    clearTimeout(timer);
    timer = setTimeout(() => {
      setQuery(q.target.value);
    }, 300);
  };

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Search the posts</h1>
      <input onChange={debounceSearch} placeholder="Search Post" />
      <ul>
        {filteredPosts &&
          filteredPosts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
};
