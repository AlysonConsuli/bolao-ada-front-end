/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GameResult } from "../../components/GameResult/index.jsx";
import { Loading } from "../../components/Loading/index.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as S from "../../styles/style.js";
import { alertError } from "../../utils/alertError.js";
import { config } from "../../utils/config.js";

export const Games = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/games`, config(user))
      .then(({ data }) => setGames(data.games))
      .catch((error) => alertError(error));
  }, []);

  if (!games?.length) {
    return <Loading />;
  }

  return (
    <S.PageContainer>
      <S.GamesResult>
        {games?.map((game) => (
          <GameResult key={game.id} game={game} />
        ))}
      </S.GamesResult>
    </S.PageContainer>
  );
};
