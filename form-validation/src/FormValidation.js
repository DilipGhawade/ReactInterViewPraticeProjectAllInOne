import { useState } from "react";

export const FormValidation = () => {
  const [form, setForm] = useState({ userid: "", password: "" });

  const validation = () => {
    let isValid = true;
    if (!form.userid.trim()) {
      isValid = false;
    }
    if (form.password.length <= 4) {
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation()) {
      alert("Please enter the userid and passwrod to login");
      return;
    }
    // alert(`userId : ${form.userid} and passwrod : ${form.password}`);
  };

  return (
    <>
      <h1>Login Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.userid}
          onChange={(e) => setForm({ ...form, userid: e.target.value })}
          placeholder="Enter User Id"
        />
        <br />
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Enter Passwrod "
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
