import { Route, Routes } from "react-router";
import LandingPage from "../pages/landing/LandingPage";
import AuthenticateRoutes from "./validatedroutes/AuthenticateRoutes";
import Login from "../pages/NotAuthenticates/Login";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AuthenticateRoutes />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
