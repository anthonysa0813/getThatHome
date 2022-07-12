import React from "react";
import LandingRoutes from "./pages/landingPage/routes";
import { BrowserRouter } from "react-router-dom";

const GetHomeApp = () => {
  return (
    <BrowserRouter>
      <LandingRoutes />
    </BrowserRouter>
  );
};

export default GetHomeApp;
