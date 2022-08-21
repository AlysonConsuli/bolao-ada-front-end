import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

export const AuthLayout = () => {
  const { user } = useContext(UserContext);

  if (user?.name === "admin") {
    return <Navigate to="/admin/homepage" replace={true} />;
  }

  if (user) {
    return <Navigate to="/homepage" replace={true} />;
  }

  return <Outlet />;
};
