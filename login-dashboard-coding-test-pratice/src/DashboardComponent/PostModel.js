import axios from "axios";
import { useEffect, useState } from "react";

export const PostModel = ({ post, onUpdate, onClose }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  if (!post) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        post
      );
      if (resp.status === 200) {
        onUpdate({ ...post, title, body });
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ backgroundColor: "white", alignContent: "center" }}>
          <form
            style={{
              alignContent: "center",
              display: "flex",
              flexDirection: "column",
              width: "320px",
              margin: "20px",
              gap: 10,
            }}
          >
            <label>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="update title"
            />
            <label>Body</label>
            <input
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="update body"
            />
            <button onClick={handleUpdate}>Save</button>
          </form>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
};
