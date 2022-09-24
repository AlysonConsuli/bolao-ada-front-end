import * as S from "../../styles/style.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";

export const User = ({ user }) => {
  const navigate = useNavigate();

  const { user: userLocal } = useContext(UserContext);
  const myRanking = user.name === userLocal.name;

  function seeBets() {
    navigate(`/bets/user/${user.id}`);
  }

  return (
    <S.User myRanking={myRanking} onClick={seeBets}>
      <span>{user.name}</span>
      <span>{user.points !== null ? user.points : "-"}</span>
      <S.Rank pos={user.ranking}>{user.ranking}º</S.Rank>
      <S.EyeIcon></S.EyeIcon>
    </S.User>
  );
};
