import React from "react";

const InputForm = ({ label, type, placeholder = "", handleChange, name }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
    </>
  );
};

export default InputForm;
