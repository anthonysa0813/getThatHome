import React from "react";
import { useState } from "react";

// import { createUser }  from "";
// import Input from "";

function SignupForm(params) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const { email, password, phone, name } = formData;

  function handleSubmit(event) {
    event.preventDefault();
    createUser(formData).then(console.log).catch(console.log);
  }

  function handleChange(event) {
    const { name, value} = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="John Doe"
        label="Name"
      />
      <Input
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="user@email.com"
        label="Email"
      />
      <Input
        name="phone"
        type="number"
        value={phone}
        onChange={handleChange}
        placeholder="999-999-999"
        label="Phone"
      />
      <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="******"
          label="Password"
        />
        <Input
          name="password_confirm"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="******"
          label="Password confirmation"
        />
      <button>Create Account</button>
    </form>
  )
}

export default SignupForm;