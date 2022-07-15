import React, { useState } from "react";
import useFormRegister from "../../../user/hooks/useFormRegister";
import { FormRegisterForm } from "../../styles/Users";

const FormRegister = ({ typeUser }) => {
  const [formUser, setForm] = useState({});

  const { userData, error, handleChange, handleSubmit, form } = useFormRegister(
    formUser,
    typeUser
  );

  const { name, email, phone, password } = form;

  return (
    <FormRegisterForm>
      <h3 className="text-center">Create your Account</h3>
      <div className="formFields">
        <div className="field">
          <label htmlFor="">NAME</label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="">EMAIL</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="">PHONE</label>
          <input
            type="text"
            placeholder="999-999-999"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="">PASSWORD</label>
          <input
            type="text"
            placeholder="******"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="">PASSWORD CONFIRMATION</label>
          <input type="text" placeholder="John Doe" name="name" />
        </div>
      </div>
      <div className="field text-center mt-1">
        <button className="btn bg-pink border-radius">CREATE ACCOUNT</button>
      </div>
    </FormRegisterForm>
  );
};

export default FormRegister;
