import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const SearchBox = () => {
  //   const [input, setInput] = useState("");
  const [searchDebounce, setSearchDebounce] = useState("");
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const debounce = (fn, delay = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const debouceSearch = debounce((val) => {
    setSearchDebounce(val);
  });
  const handleSearch = (e) => {
    debouceSearch(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const filterItems = data.filter((post) =>
    post.title.toLowerCase().includes(searchDebounce.toLowerCase())
  );

  return (
    <>
      <h1>Search Box</h1>
      <input onChange={(e) => handleSearch(e)} placeholder="Search..." />
      <ul>
        {filterItems &&
          filterItems.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
};
