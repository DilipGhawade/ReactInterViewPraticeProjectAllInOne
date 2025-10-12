import { useFetch } from "./useFetch";

export const BasicTableDemo = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <h1>Loading data....</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>User Id: </th>
            <th>Id: </th>
            <th>Title: </th>
            <th>Body: </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((post, index) => (
              <tr key={index}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
