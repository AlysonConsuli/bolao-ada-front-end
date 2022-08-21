/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.jsx";
import axios from "axios";
import { alertError } from "../utils/alertError.js";

export default function AdminLayout() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  }

  useEffect(() => {
    if (!user) {
      return <Navigate to="/" />;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/admin-login`, {}, config)
      .then(() => {})
      .catch((error) => {
        console.log(error);
        alertError(error);
        logout();
      });
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
