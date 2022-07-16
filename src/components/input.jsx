function Input({ id, name, type = "text", value, handleChange, placeholder, label }) {
  return (
    <div>
      {label && <label htmlFor={id || name}>{label}</label>}
      <input
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;