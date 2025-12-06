import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailEror, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/dashboard");
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmailError("Please Enter Valid Email id");
      return;
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="d-flex flex-column justify-content-center align-items-center p-4 border rounded bg-white shadow">
            <h1 className="mb-4">Login</h1>

            <div className="w-100 mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="enteryourmail@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-100 mb-3">
              <label htmlFor="pwd" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter your password here"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary w-100 mb-3"
              onClick={handleLoginClick}
            >
              Login
            </button>

            <label
              className="text-primary cursor-pointer"
              style={{ cursor: "pointer" }}
              onClick={handleRegisterClick}
            >
              Not registered? click here to register
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
