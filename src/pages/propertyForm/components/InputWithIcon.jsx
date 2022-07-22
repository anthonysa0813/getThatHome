import React from "react";

const InputWithIcon = ({
  iconType,
  placeholder,
  name,
  value = "",
  onChange,
}) => {
  return (
    <>
      <div className="input-container">
        <i className={`icon-${iconType} color-gris`}></i>
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputWithIcon;
