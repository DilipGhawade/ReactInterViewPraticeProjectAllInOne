import React, { ChangeEvent, FormEvent, FocusEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomLabel from "../../components/Label/Label";

import Input from "../../components/Input/Input";
import { useStorage } from "../../hooks/useStorage";

import { UserData } from "../../types/UserData";
import Button from "../../components/Button/Button";
import { validateEmail } from "../../utils/validation";
interface LoginFromData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [userData, setUserData] = useStorage<UserData[]>(
    "submittedRegistrations",
    []
  );

  const [loginFormData, setLoginFormData] = useState<LoginFromData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    if (!password) return "Password is required!";
    return "";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      name: "",
    }));
  };

  const handleError = (e: FocusEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    let error = "";
    switch (name) {
      case "email":
        error = validateEmail(value, userData);
        break;
      case "password":
        error = validatePassword(value);
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      name: error,
    }));
  };
  const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newErrors: FormErrors = {
      email: validateEmail(loginFormData.email, userData),
      password: validatePassword(loginFormData.password),
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === "");

    if (isValid) {
      // Find the user
      const user = userData.find(
        (user: UserData) => user.email === loginFormData.email
      );

      console.log("Login successful!", user);
      //   alert(`Welcome back ${user?.firstName}!`);

      // Clear form
      setLoginFormData({
        email: "",
        password: "",
      });

      navigate("/dashboard");
    }
  };

  const handleRegisterClick = (): void => {
    navigate("/registration");
  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-sm mx-auto p-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Login
          </h2>
          <p className="mt-2 text-lg/8 text-gray-400">
            Please enter your credentials to login
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <CustomLabel label="Enter Your Email Id" />
          <Input
            id="email"
            name="email"
            type="email"
            value={loginFormData.email}
            onChange={handleChange}
            onBlur={handleError}
            autoComplete="email"
            placeholder="you@example.com"
            required
            error={errors.email}
            showError={!!errors.email}
            marginTop="mt-2"
          />
          <CustomLabel label="Enter Your Password" />
          <Input
            id="password"
            name="password"
            type="password"
            value={loginFormData.password}
            onChange={handleChange}
            onBlur={handleError}
            placeholder="••••••••"
            autoComplete="current-password"
            required
            error={errors.password}
            showError={!!errors.password}
            marginTop="mt-2"
          />

          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
        <CustomLabel
          onClick={handleRegisterClick}
          color="indigo-600"
          label="Click here to register"
          className="mt-4 cursor-pointer hover:text-indigo-400 transition-colors"
        />
      </div>
    </div>
  );
};

export default LoginPage;
