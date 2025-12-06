import { useState, useEffect } from "react";
import axios from "axios";

const DahsboardPage = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const resp = await axios.get(url);
        if (resp.data) {
          setPosts(resp.data);
        }
      } catch (err) {
        setError("Failed to fetch posts");
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h2 mb-0">Posts</h1>
            <span className="badge bg-primary">{posts.length} posts</span>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col" className="text-nowrap">
                        ID
                      </th>
                      <th scope="col" className="text-nowrap">
                        Title
                      </th>
                      <th scope="col" className="d-none d-md-table-cell">
                        Body
                      </th>
                      <th scope="col" className="text-nowrap"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr key={post.id}>
                        <td className="fw-bold">{post.id}</td>
                        <td>
                          <div
                            className="text-truncate"
                            style={{ maxWidth: "200px" }}
                          >
                            {post.title}
                          </div>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <div
                            className="text-truncate"
                            style={{ maxWidth: "300px" }}
                          >
                            {post.body}
                          </div>
                        </td>
                        <td>
                          <div className="btn-group" role="group">
                            <button className="btn btn-outline-primary btn-sm">
                              <i className="bi bi-pencil"></i> Edit
                            </button>
                            <button className="btn btn-outline-danger btn-sm">
                              <i className="bi bi-trash"></i> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {posts.length === 0 && (
                <div className="text-center py-4">
                  <p className="text-muted">No posts found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DahsboardPage;
