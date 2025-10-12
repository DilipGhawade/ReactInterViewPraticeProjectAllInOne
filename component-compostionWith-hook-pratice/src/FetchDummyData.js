import { useFetch } from "./useFetch";

const FetchDummyData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, loading, error } = useFetch(url);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default FetchDummyData;
