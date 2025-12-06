import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.get("login", "false");
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };
  if (!isLogin) {
    return (
      <>
        <h3>Please Login</h3>
        <button onClick={handleLoginClick}>Login</button>
      </>
    );
  }

  return children;
};
