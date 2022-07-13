import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
    </Routes>
  );
};

export default LandingRoutes;
