import { useEffect, useState } from "react";
import { fetchPostes } from "./api/postApi";
import SearchBox from "./SearchBox";

const PostPage = () => {
  const [posts, setPost] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchPostes(query);
        setPost(data);
      } catch (err) {
        console.log("Error while fetching data ", err);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [query]);

  return (
    <div className="max-w-2xl max-auto p-4">
      <h1 className="text-tl font-bold mb-4"> Post Search</h1>
      {/* Search Box*/}
      <SearchBox onSearch={setQuery} />

      {loading ? (
        <p className="mt-4">Loading...</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {posts.map((post) => (
            <li key={post.id} className="border rounded p-2">
              <h2 className="font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostPage;
