import React from "react";

const InputForm = ({ label, type, placeholder = "" }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input type={type} placeholder={placeholder} />
    </>
  );
};

export default InputForm;
