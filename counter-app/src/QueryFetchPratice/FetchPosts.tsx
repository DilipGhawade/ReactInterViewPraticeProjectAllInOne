import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function FetchPosts() {
  const fetchPosts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  };

   const { data, isLoading, isError, error } = useQuery(["posts"], fetchPosts, {
     staleTime: 1000 * 60 * 5, // 5 minutes
   });

   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Error: {error.message}</p>;
return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
}
