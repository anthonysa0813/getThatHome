import { Route, Routes } from "react-router-dom";

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>LandingPage :D</h1>} />
    </Routes>
  );
};

export default LandingRoutes;
