import React from "react";
import useForm from "./useForm";

const LoginForm = () => {
  const { values, handleChange, resetForm } = useForm({
    userName: "",
    passwrod: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        value={values.userName}
        onChange={handleChange}
      />
      <input name="passwrod" value={values.passwrod} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
