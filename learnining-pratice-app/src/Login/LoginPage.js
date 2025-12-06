import CustomInput from "../CustomUi/CustomInput";
import CustomLabel from "../CustomUi/CustomLabel";
import CustomButton from "../CustomUi/CustomButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStorage } from "../hooks/useStorage";
const LoginPage = () => {
  const [userData, setUserData] = useStorage("submittedRegistrations", []);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please Enter valid email address";
    console.log(`userData is ${JSON.stringify(userData)}`);

    const userExists = userData.some((user) => loginFormData.email === email);

    if (!userExists) return "User not found";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    return "";
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "email":
        error = validateEmail(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {
      email: validateEmail(loginFormData.email),
      password: validatePassword(loginFormData.password),
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === "");

    if (isValid) {
      // Find the user
      const user = userData.find((user) => user.email === loginFormData.email);

      console.log("Login successful!", user);
      //   alert(`Welcome back ${user.firstName}!`);

      // Clear form
      setLoginFormData({
        email: "",
        password: "",
      });

      navigate("/dashboard");
    }
  };
  const handleRegisterClick = () => {
    navigate("/registration");
  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-sm mx-auto p-8">
        {/* Your content here */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Login
          </h2>
          <p className="mt-2 text-lg/8 text-gray-400">
            Please Enter Your credentials for Login
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <CustomLabel label="Enter Your Email Id" />
          <CustomInput
            id="email"
            name="email"
            type="email"
            value={loginFormData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="email"
            placeholder="you@example.com"
            required
            error={errors.email}
            showError={!!errors.email}
            marginTop="mt-2"
          />
          <CustomLabel label="Enter Your password" />
          <CustomInput
            id="password"
            name="password"
            type="password"
            value={loginFormData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="••••••••"
            autoComplete="current-password"
            required
            error={errors.password}
            showError={!!errors.password}
            marginTop="mt-2"
          />
          <CustomButton type="submit" marginTop="mt-4" btnText="Login" />
        </form>
        <CustomLabel
          onClick={handleRegisterClick}
          color="indigo-500"
          label="Click here to register"
        />
      </div>
    </div>
  );
};
export default LoginPage;
