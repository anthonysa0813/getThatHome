import { Route, Routes } from "react-router-dom";
import PropertyFormPage from "../../propertyForm/routes/PropertyFormPage";
import MainPage from "./MainPage";

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/property" element={<PropertyFormPage/>}/>
    </Routes>
  );
};

export default LandingRoutes;
