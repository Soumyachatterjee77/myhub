import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const AuthenticateRoutes = () => {
  const { authenticate } = useSelector((state) => state.auth);
  return <>{authenticate ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default AuthenticateRoutes;
