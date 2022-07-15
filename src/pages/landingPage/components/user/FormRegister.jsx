import React from "react";
import { FormRegisterForm } from "../../styles/Users";

const FormRegister = () => {
  return (
    <FormRegisterForm>
      <h3 className="text-center">Create your Account</h3>
      <div className="formFields">
        <div className="field">
          <label htmlFor="">NAME</label>
          <input type="text" placeholder="John Doe" name="name" />
        </div>
        <div className="field">
          <label htmlFor="">EMAIL</label>
          <input type="text" placeholder="example@gmail.com" name="email" />
        </div>
        <div className="field">
          <label htmlFor="">PHONE</label>
          <input type="text" placeholder="999-999-999" name="phone" />
        </div>
        <div className="field">
          <label htmlFor="">PASSWORD</label>
          <input type="text" placeholder="******" name="password" />
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
