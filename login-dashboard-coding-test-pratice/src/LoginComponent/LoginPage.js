import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [forms, setForms] = useState({
    email: "dilip@gmail.com",
    password: "12345",
  });

  const handelLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLogin", true);
    navigate("dahsboard");
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px",
          width: "300px",
          alignContent: "center",
        }}
      >
        <input
          value={forms.email}
          onChange={(e) => setForms({ ...forms, email: e.target.value })}
          placeholder="Enter Yor email id "
        />
        <input
          value={forms.password}
          onChange={(e) => setForms({ ...forms, password: e.target.value })}
        />
        <button onClick={handelLogin}>Login</button>
      </form>
    </>
  );
};

export default LoginPage;
