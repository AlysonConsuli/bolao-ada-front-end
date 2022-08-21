import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import * as S from "../../styles/style.js";
import { ModalComponent } from "../Modal/index";

export const PagesHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const uri = location.pathname.split("/");
  let title = "";
  if (uri.length >= 3 && uri[1] !== "admin") {
    title = `${uri[1]} per ${uri[2]}`;
  } else if (uri.length >= 2 && uri[1] !== "admin") {
    title = uri[1];
  }

  const { setUser } = useContext(UserContext);

  const [logoutModal, setLogoutModal] = useState(false);

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  }

  return (
    <>
      <ModalComponent
        modalState={logoutModal}
        callbackCloseModal={() => setLogoutModal(false)}
        callbackFunction={() => logout()}
        message={"logout"}
      />
      <S.PagesHeader>
        <S.BackIcon onClick={() => navigate(-1)}></S.BackIcon>
        <S.Title>
          <h1>Bolão ADA</h1>
          <h2>{title}</h2>
        </S.Title>
        <S.LogoutIcon onClick={() => setLogoutModal(true)}></S.LogoutIcon>
      </S.PagesHeader>
    </>
  );
};
