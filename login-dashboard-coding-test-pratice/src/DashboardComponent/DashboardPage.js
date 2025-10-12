import axios from "axios";
import { useEffect, useState } from "react";
import { PostModel } from "./PostModel";

const DashboardPage = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);

  const handleEditClick = (post) => {
    setPost(post);
  };
  function handleUpdate(post) {
    setPosts((prevPost) => prevPost.map((p) => (post.id === p.id ? post : p)));
  }

  function handleClose() {
    setPost(null);
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const resp = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (resp.status === 200) {
          setPosts(resp.data);
        }
      } catch (error) {
        console.log(`error while fetching posts ${error.message}`);
      }
    };
    fetchPost();
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      const resp = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      if (resp.status === 200) {
        handleDelete(postId);
      }
    } catch (error) {}
  };

  const handleDelete = (postId) => {
    setPosts((prevPost) => prevPost.filter((p) => p.id !== postId));
  };

  return (
    <>
      <header>My AppBar</header>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>body</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button onClick={() => handleEditClick(post)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDeletePost(post.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <PostModel post={post} onUpdate={handleUpdate} onClose={handleClose} />
    </>
  );
};

export default DashboardPage;
