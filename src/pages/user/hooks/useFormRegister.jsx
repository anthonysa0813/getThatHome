import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../../helper/fetchFunctions";
import { UserContext } from "../context/UserContext";

const useFormRegister = (formUser, typeUser, setForm) => {
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({});
  const routePath = typeUser === "seeker" ? "seeker/signup" : "landlord/signup";
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formUser).includes("")) {
      console.log("Todos los campos son requeridos...");
      setError(true);
      return;
    }
    createAccount(formUser, routePath).then((res) => {
      console.log(res);
      const { token, ...userResponse } = res;
      setUser(userResponse);
      sessionStorage.setItem("token", token);
      if (token) {
        navigate("/properties");
      }
      setUserData(res);
    });
  };

  return { userData, error, handleChange, handleSubmit };
};

export default useFormRegister;
