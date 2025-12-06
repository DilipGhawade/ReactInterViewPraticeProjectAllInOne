import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const UserPage = () => {
  const fetchUser = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    return resp.data;
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Eror {error.message}</h1>;
  }
  return (
    <>
      <ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  );
};

export default UserPage;
