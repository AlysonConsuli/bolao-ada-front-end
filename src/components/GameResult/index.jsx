import * as S from "../../styles/style.js";
import { useNavigate } from "react-router-dom";
import { formats } from "../../utils/formats.js";

export const GameResult = ({ game }) => {
  const navigate = useNavigate();

  const hasResult = game.score1 !== null && game.score2 !== null ? true : false;
  const score1 = hasResult ? game.score1 : "-";
  const score2 = hasResult ? game.score2 : "-";
  const date = formats.formatDate(game.date);

  function seeBets() {
    navigate(`/bets/game/${game.id}`);
  }

  return (
    <>
      <S.Time>{date}</S.Time>
      <S.GameResult onClick={seeBets}>
        <S.TeamName>{game.team1.name}</S.TeamName>
        <S.BoxInput>
          {<span>{score1}</span>}
          <p>x</p>
          {<span>{score2}</span>}
        </S.BoxInput>
        <S.TeamName>{game.team2.name}</S.TeamName>
        <S.EyeIcon></S.EyeIcon>
      </S.GameResult>
    </>
  );
};
