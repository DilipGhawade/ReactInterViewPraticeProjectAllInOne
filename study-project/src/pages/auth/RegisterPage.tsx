import React, { useState, ChangeEvent, FocusEvent, FormEvent } from "react";
import { UserData } from "../../types/UserData";
import CustomLabel from "../../components/Label/Label";

import Input from "../../components/Input/Input";
import { useStorage } from "../../hooks/useStorage";

import Button from "../../components/Button/Button";
import { validateEmailId } from "../../utils/validation";

import { useNavigate } from "react-router-dom";
const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [_, setSubmittedData] = useStorage<UserData[]>(
    "submittedRegistrations",
    []
  );

  const [formData, setFormData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    mobileno: "",
    password: "",
    confirmpwd: "",
  });

  const [errors, setErrors] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    mobileno: "",
    password: "",
    confirmpwd: "",
  });
  const validateFirstName = (firstName: string) => {
    if (!firstName) return "FirstName is required!";
    if (firstName.length < 0) return "FirstName must be at least 2 character";
    return "";
  };
  const validateLastName = (lastName: string) => {
    if (!lastName) return "LastName is required!";
    if (lastName.length < 2) return "LastName must be at least 2 character";
    return "";
  };

  const validateMobileNo = (mobileNo: string) => {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileNo) return "Mobile Number is required!";
    if (!mobileRegex.test(mobileNo))
      return "Please enter a valid 10-digit mobile number";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required!";
    if (password.length < 6) return "Password must be at least 6 character";
    return "";
  };

  const validateConfirmPassword = (confirmPwd: string) => {
    if (!confirmPwd) return "Please confirm your password";
    if (confirmPwd !== formData.password) return "Password dose not match";
    return "";
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleError = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error: string = "";
    switch (name) {
      case "email":
        error = validateEmailId(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
      case "firstName":
        error = validateFirstName(value);
        break;
      case "lastName":
        error = validateLastName(value);
        break;
      case "mobileNo":
        error = validateMobileNo(value);
        break;
      case "confirmPwd":
        error = validateConfirmPassword(value);
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newErrors = {
      firstName: validateFirstName(formData.firstName),
      lastName: validateLastName(formData.lastName),
      email: validateEmailId(formData.email),
      mobileno: validateMobileNo(formData.mobileno),
      password: validatePassword(formData.password),
      confirmpwd: validateConfirmPassword(formData.confirmpwd),
    };

    setErrors(newErrors);
    const isValid = Object.values(newErrors).every((error) => error === "");
    if (isValid) {
      console.log("Form is valid!", formData);
      const dataStore = {
        ...formData,
        password: "",
        confirmpwd: "",
        submittedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        id: Date.now(),
      };

      setSubmittedData((prev) => [...prev, dataStore]);
      alert("Form submitted successfully!");

      // clear the form data

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileno: "",
        password: "",
        confirmpwd: "",
      });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Registration
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields - Grid Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <CustomLabel htmlFor="firstName" label="First name" />
              <div className="mt-2">
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  onBlur={handleError}
                  autoComplete="given-name"
                  placeholder="Enter your first name"
                  error={errors.firstName}
                  showError={!!errors.firstName}
                  marginTop="mt-2"
                />
              </div>
            </div>

            <div>
              <CustomLabel htmlFor="lastName" label="Last name" />
              <div className="mt-2">
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={handleError}
                  autoComplete="family-name"
                  placeholder="Enter your last name"
                  error={errors.lastName}
                  showError={!!errors.lastName}
                  marginTop="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div>
            <CustomLabel htmlFor="email" label="Email" />
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleError}
              autoComplete="email"
              placeholder="you@example.com"
              required
              error={errors.email}
              showError={!!errors.email}
              marginTop="mt-2"
            />
          </div>

          {/* Mobile Field */}
          <div>
            <CustomLabel htmlFor="mobileno" label="Mobile No." />
            <Input
              id="mobileno"
              name="mobileno"
              type="tel"
              value={formData.mobileno}
              onChange={handleInputChange}
              onBlur={handleError}
              autoComplete="tel"
              placeholder="1234567890"
              error={errors.mobileno}
              showError={!!errors.mobileno}
              marginTop="mt-2"
            />
          </div>

          {/* Password Field */}
          <div>
            <CustomLabel htmlFor="password" label="Password" />
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleError}
              placeholder="••••••••"
              autoComplete="new-password"
              required
              error={errors.password}
              showError={!!errors.password}
              marginTop="mt-2"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <CustomLabel htmlFor="confirmpwd" label="Confirm Password" />
            <Input
              id="confirmpwd"
              name="confirmpwd"
              type="password"
              value={formData.confirmpwd}
              onChange={handleInputChange}
              onBlur={handleError}
              placeholder="Confirm your password"
              autoComplete="new-password"
              required
              error={errors.confirmpwd}
              showError={!!errors.confirmpwd}
              marginTop="mt-2"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" marginTop="mt-6">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
