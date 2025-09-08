import { useState } from "react";

export const FormWithValidaton = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  function validateForm() {
    let isValid = true;
    const newErrors = { name: "", email: "" };
    if (!formData.name.trim()) {
      newErrors.name = "Name should not be empty!";
      isValid = false;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(formData.email)) {
      newErrors.email = "Invalid Email";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(`form submitted successfully ${formData.name} ${formData.email}`);
    }
  };

  return (
    <>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter a Name"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <label>Enter Eail id </label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <button type="submit">Validate</button>
      </form>
    </>
  );
};
