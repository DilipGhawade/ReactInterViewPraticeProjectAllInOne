import { useMemo, useState } from "react";

function SearchFilters() {
  //   const [searchItem, setSearchItem] = useState("");
  const [debouncedSearchItem, setDebounceSearchItem] = useState("");

  const items = [
    "banana",
    "mango",
    "apple",
    "orange",
    "pinaple",
    "mosambi",
    "grapes",
    "gava",
    "chicku",
  ];

  const debounceSearch = useMemo(() => {
    let timer;
    return (value) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setDebounceSearchItem(value);
      }, 600);
    };
  }, []);
  const filterItems = items.filter((fruit) =>
    fruit.toLocaleLowerCase().includes(debouncedSearchItem.toLocaleLowerCase())
  );

  return (
    <>
      <h1>Search Implementation</h1>
      <input
        type="text"
        value={debouncedSearchItem}
        onChange={(e) => debounceSearch(e.target.value)}
        placeholder="Search Fruit..."
      />

      <ul>
        {filterItems?.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default SearchFilters;
