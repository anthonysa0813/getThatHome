import React from "react";

const InputWithIcon = ({ iconType, placeholder, name, value = "" }) => {
  return (
    <div className="input-container">
      <i className={`icon-${iconType} color-gris`}></i>
      <input type="text" placeholder={placeholder} name={name} value={value} />
    </div>
  );
};

export default InputWithIcon;
