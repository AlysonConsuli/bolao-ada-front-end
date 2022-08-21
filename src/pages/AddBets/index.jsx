/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "../../styles/style.js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Game } from "../../components/Game/index.jsx";
import { Loading } from "../../components/Loading/index.jsx";
import { alertError } from "../../utils/alertError.js";
import { config } from "../../utils/config.js";

export const AddBets = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);

  const [games, setGames] = useState([]);
  const [userBets, setUserBets] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/games`, config(user))
      .then(({ data }) => setGames(data.games))
      .catch((error) => alertError(error));
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/bets?groupBy=user`, config(user))
      .then(({ data }) => setUserBets(data.bets))
      .catch((error) => alertError(error));
  }, []);

  function verifyHasBet(game) {
    let userBet = false;
    for (let i = 0; i < userBets?.length; i++) {
      const bet = userBets[i];
      if (bet.game.id === game.id) {
        userBet = bet;
        break;
      }
    }
    return userBet;
  }

  if (!games?.length || userBets === null) {
    return <Loading />;
  }

  return (
    <S.PageContainer>
      <S.Games>
        {games?.map((game) => {
          const userBet = verifyHasBet(game);
          if (!userBet) {
            return <Game key={game.id} obj={game} />;
          }
          return "";
        })}
        {userBets?.map((bet) => {
          return <Game key={bet.game.id} obj={bet} />;
        })}
      </S.Games>
    </S.PageContainer>
  );
};
