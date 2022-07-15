import React from "react";
import { LoginFormContainer } from "../../styles/Users";
import InputForm from "./InputForm";

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <h4 className="text-center">Login</h4>
      <div className="field">
        <InputForm label="Email" type="email" placeholder="example@gmail.com" />
      </div>
      <div className="field">
        <InputForm label="Password" type="password" placeholder="**********" />
      </div>
      <button className="btn bg-pink border-radius">
        <i className="icon-login"></i>
        Login
      </button>
    </LoginFormContainer>
  );
};

export default LoginForm;
