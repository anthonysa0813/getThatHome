import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SearchProperties from "../components/SearchProperties";
import UserPage from "../components/user/UserPage";
import MainPage from "./MainPage";

const LandingRoutes = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage setShowModal={setShowModal} showModal={showModal} />}
      />
      <Route
        path="/register"
        element={<UserPage setShowModal={setShowModal} showModal={showModal} />}
      />
      <Route
        path="/properties"
        element={
          <SearchProperties setShowModal={setShowModal} showModal={showModal} />
        }
      />
    </Routes>
  );
};

export default LandingRoutes;
