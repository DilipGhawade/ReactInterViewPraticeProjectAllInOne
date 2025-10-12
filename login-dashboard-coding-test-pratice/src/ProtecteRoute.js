import { Navigate } from "react-router-dom";

export const ProtecteRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin");

  return isLogin ? children : <Navigate to="/login" />;
};
