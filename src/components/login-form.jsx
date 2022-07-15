import React from "react";
import { useState } from "react";

// import { login }  from "";
// import Input from "";

function LoginForm(params) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function handleSubmit(event) {
    event.preventDefault();
    login(formData).then(console.log).catch(console.log);
  }

  function handleChange(event) {
    const { name, value} = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="user@email.com"
        label="Email"
      />
      <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="******"
          label="Password"
        />
      <button>Login</button>
    </form>
  )
}

export default LoginForm;