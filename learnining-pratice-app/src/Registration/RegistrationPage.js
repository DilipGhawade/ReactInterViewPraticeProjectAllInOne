import CustomInput from "../CustomUi/CustomInput";
import CustomLabel from "../CustomUi/CustomLabel";
import CustomButton from "../CustomUi/CustomButton";
import { useState } from "react";
import { useStorage } from "../hooks/useStorage";
import { useNavigate } from "react-router-dom";
const RegistrationPage = () => {
  const navigate = useNavigate();
  const [_, setSubmittedData] = useStorage("submittedRegistrations", []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileno: "",
    password: "",
    confirmpwd: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileno: "",
    password: "",
    confirmpwd: "",
  });

  // Validation functions
  const validateFirstName = (firstName) => {
    if (!firstName) return "First name is required";
    if (firstName.length < 2) return "First name must be at least 2 characters";
    return "";
  };

  const validateLastName = (lastName) => {
    if (!lastName) return "Last name is required";
    if (lastName.length < 2) return "Last name must be at least 2 characters";
    return "";
  };

  const validateMobile = (mobileno) => {
    if (!mobileno) return "Mobile number is required";
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobileno))
      return "Please enter a valid 10-digit mobile number";
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter valid email address";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required!";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) return "Please confirm your password";
    if (confirmPassword !== formData.password) return "Passwords do not match";
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
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
      case "firstName":
        error = validateFirstName(value);
        break;
      case "lastName":
        error = validateLastName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "mobileno":
        error = validateMobile(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
      case "confirmpwd":
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: validateFirstName(formData.firstName),
      lastName: validateLastName(formData.lastName),
      email: validateEmail(formData.email),
      mobileno: validateMobile(formData.mobileno),
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
                <CustomInput
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
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
                <CustomInput
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
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
            <CustomInput
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
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
            <CustomInput
              id="mobileno"
              name="mobileno"
              type="tel"
              value={formData.mobileno}
              onChange={handleInputChange}
              onBlur={handleBlur}
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
            <CustomInput
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
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
            <CustomInput
              id="confirmpwd"
              name="confirmpwd"
              type="password"
              value={formData.confirmpwd}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Confirm your password"
              autoComplete="new-password"
              required
              error={errors.confirmpwd}
              showError={!!errors.confirmpwd}
              marginTop="mt-2"
            />
          </div>

          {/* Submit Button */}
          <CustomButton
            type="submit"
            btnText="Create Account"
            marginTop="mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
