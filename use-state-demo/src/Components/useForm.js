import React, { useState } from "react";

const useForm = (intialValues) => {
  const [values, setValues] = useState(intialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues(intialValues);
  };
  return { values, handleChange, resetForm };
};

export default useForm;
