import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../../../../components/Message";
import { UserContext } from "../../../user/context/UserContext";
import useFormRegister from "../../../user/hooks/useFormRegister";
import { LoginFormContainer } from "../../styles/Users";
import InputForm from "./InputForm";

const LoginForm = ({ setActiveModal, setShowModal, showModal }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const { email, password } = form;
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const loginMethod = async (user) => {
    const response = await fetch(`http://127.0.0.1:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const showModalFunc = () => {
    setActiveModal((activeValue) => !activeValue);
    console.log({ setShowModal });
    console.log({ showModal });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      console.log("todos los campos son requeridos");
      setError(true);
      return;
    }
    setError(false);
    loginMethod(form).then((res) => {
      const { token, ...userLogin } = res;
      sessionStorage.setItem("token", token);
      setUser(userLogin);
      navigate("/properties");
      setShowModal(false);
      setActiveModal(false);
    });
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit}>
      <span className="close" onClick={showModalFunc}>
        x
      </span>
      <h4 className="text-center">Login</h4>
      {error && (
        <Message type="danger">Todos los campos son obligatorios...</Message>
      )}
      <div className="field">
        <InputForm
          label="Email"
          value={email}
          type="email"
          name="email"
          placeholder="example@gmail.com"
          handleChange={handleChange}
        />
      </div>
      <div className="field">
        <InputForm
          label="Password"
          value={password}
          type="password"
          name="password"
          placeholder="**********"
          handleChange={handleChange}
        />
      </div>
      <button className="btn bg-pink border-radius" type="submit">
        <i className="icon-login"></i>
        Login
      </button>
    </LoginFormContainer>
  );
};

export default LoginForm;
