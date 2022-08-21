import * as S from "../../styles/style.js";

export const UserBet = ({ bet }) => {
  return (
    <S.Bet>
      <S.TeamName>{bet.game.team1.name}</S.TeamName>
      <S.BoxInput>
        {<span>{bet.score1}</span>}
        <p>x</p>
        {<span>{bet.score2}</span>}
      </S.BoxInput>
      <S.TeamName>{bet.game.team2.name}</S.TeamName>
    </S.Bet>
  );
};
