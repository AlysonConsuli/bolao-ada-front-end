import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as S from "../../styles/style.js";

export const Bet = ({ bet }) => {
  const { user } = useContext(UserContext);
  const myBet = user.name === bet.user.name;

  if (!bet.user.isPaid) {
    return <></>;
  }

  return (
    <S.Bet myBet={myBet}>
      <S.UserName>{bet.user.name}</S.UserName>
      <S.BoxInput>
        {<span>{bet.score1}</span>}
        <p>x</p>
        {<span>{bet.score2}</span>}
      </S.BoxInput>
      <S.Points>{bet.points !== null ? `${bet.points} pts` : ""}</S.Points>
    </S.Bet>
  );
};
