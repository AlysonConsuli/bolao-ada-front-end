import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as S from "../../styles/style.js";
import { GameInput } from "../GameInput/index.jsx";
import { config } from "../../utils/config.js";
import { alertError } from "../../utils/alertError.js";

export const Result = ({ game }) => {
  const URL = `${process.env.REACT_APP_API_URL}/game/result`;
  const { user } = useContext(UserContext);

  const hasGameResult =
    game.score1 !== null && game.score2 !== null ? true : false;
  const score1 = hasGameResult ? game.score1 : "";
  const score2 = hasGameResult ? game.score2 : "";
  const [hasResult, setHasResult] = useState(hasGameResult);

  const [scores, setScores] = useState({
    score1,
    score2,
  });
  const [disabled, setDisabled] = useState(false);

  async function addResult(e) {
    e.preventDefault();
    setDisabled(true);
    try {
      await axios.post(
        URL,
        { id: game.id, score1: +scores.score1, score2: +scores.score2 },
        config(user),
      );
      setHasResult(true);
    } catch (error) {
      setDisabled(false);
      alertError(error);
    }
  }

  function editResult() {
    setHasResult(false);
    setDisabled(false);
  }

  return (
    <S.Game onSubmit={addResult}>
      <S.TeamName>{game?.team1.name}</S.TeamName>
      <S.BoxInput>
        {hasResult ? (
          <span>{scores.score1}</span>
        ) : (
          <GameInput
            onChange={(e) => setScores({ ...scores, score1: e.target.value })}
            value={scores.score1}
            disabled={disabled}
          />
        )}
        <p>x</p>
        {hasResult ? (
          <span>{scores.score2}</span>
        ) : (
          <GameInput
            onChange={(e) => setScores({ ...scores, score2: e.target.value })}
            value={scores.score2}
            disabled={disabled}
          />
        )}
      </S.BoxInput>
      <S.TeamName>{game?.team2.name}</S.TeamName>
      <S.CheckBox type="submit" disabled={disabled} $hasBet={hasResult}>
        <S.CheckIcon></S.CheckIcon>
      </S.CheckBox>
      <S.EditIcon onClick={editResult} $hasBet={hasResult}></S.EditIcon>
    </S.Game>
  );
};
