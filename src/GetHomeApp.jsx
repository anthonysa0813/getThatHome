import React from "react";
import LandingRoutes from "./pages/landingPage/routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./pages/landingPage/components/Header";

const GetHomeApp = () => {
  return (
    <BrowserRouter>
      <LandingRoutes />
      <Header />
    </BrowserRouter>
  );
};

export default GetHomeApp;
