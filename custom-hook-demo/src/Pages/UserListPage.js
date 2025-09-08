import { useFetch } from "../CustomHooks/useFetch";
import { FormWithValidaton } from "./FormWithValidation";
import Model from "./Model";
import { PostPage } from "./PostPage";
import SearchFilters from "./SearchFilters";
import { ToggleButton } from "./ToggleButton";

export const UserListPage = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(data);
  return (
    <>
      <h1>User List App </h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {/* <PostPage /> */}
      {/* <SearchFilters /> */}
      {/* <FormWithValidaton /> */}
      {/* <ToggleButton /> */}
      <Model />
    </>
  );
};
