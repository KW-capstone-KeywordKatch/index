import { Navigate, Outlet, useLocation } from "react-router";
import { useUserInfo } from "../../State/UserInfo";

const ProtectRoute: React.FunctionComponent = () => {
  const { isLoggined } = useUserInfo();
  const currentLocation = useLocation();

  return !isLoggined ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} replace state={{ redirectedFrom: currentLocation }} />
  );
};

export default ProtectRoute;
