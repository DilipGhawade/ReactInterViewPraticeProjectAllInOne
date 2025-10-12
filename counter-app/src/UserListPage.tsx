import useFetch from "./useFetch";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const UserListPage = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, loading, error } = useFetch<User[]>(url);

  if (loading) return <h1>loading...</h1>;
  if (error) return <h3>error: {error.stack}</h3>;

  return (
    <>
      <h1>List Page</h1>
      <ul>
        {data &&
          data.map((users) => (
            <li key={users.id}>
              <h1>{users.name}</h1>
              <h3>{users.username}</h3>
            </li>
          ))}
      </ul>
    </>
  );
};
