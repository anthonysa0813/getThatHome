import { Route, Routes } from "react-router-dom";
import PropertyFormPage from "../../propertyForm/routes/PropertyFormPage";
import PropertyPage from "../../showPropertyPage/routes/PropertyPage";
import MainPage from "./MainPage";

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/property" element={<PropertyFormPage/>}/>
      <Route path="/showproperty" element={<PropertyPage/>}/>
    </Routes>
  );
};

export default LandingRoutes;
