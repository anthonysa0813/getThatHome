import { Route, Routes } from "react-router-dom";
import Login from "../../login/login";
import MainPage from "./MainPage";

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
};

export default LandingRoutes;
