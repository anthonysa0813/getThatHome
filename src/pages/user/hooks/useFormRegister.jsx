import React, { useState } from "react";
import { createAccount } from "../../../helper/fetchFunctions";

const useFormRegister = (initialState, typeUser) => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({});
  const routePath = typeUser === "seeker" ? "seeker/signup" : "landlord/signup";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Obejct.values(form).includes("")) {
      console.log("Todos los campos son requeridos...");
      setError(true);
      return;
    }
    createAccount(form, routePath).then((res) => setUserData(res));
  };

  return { userData, error, handleChange, handleSubmit, formUser };
};

export default useFormRegister;
