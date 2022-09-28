/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GameResult } from "../../components/GameResult/index.jsx";
import { LoadingHome } from "../../components/Loading/index.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as S from "../../styles/style.js";
import { alertError } from "../../utils/alertError.js";
import { config } from "../../utils/config.js";
import { formats } from "../../utils/formats.js";

export const Homepage = () => {
  const CUP_GAMES = 48;
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);
  const [games, setGames] = useState([]);
  const [userBets, setUserBets] = useState(null);
  const [todayGames, setTodayGames] = useState(null);
  const startCup = formats.startCup();

  useEffect(() => {
    axios
      .get(`${URL}/games`, config(user))
      .then(({ data }) => {
        setGames(data.games);
        for (let i = 0; i < data.games.length; i++) {
          const game = data.games[i];
          if (formats.nextGame(game.date) && data.games[i - 1]) {
            setTodayGames([data.games[i - 1], game]);
            break;
          }
          if (formats.nextGame(game.date) && !data.games[i - 1]) {
            setTodayGames([game]);
            break;
          }
        }
      })
      .catch((error) => alertError(error));
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/bets?groupBy=user`, config(user))
      .then(({ data }) => setUserBets(data.bets))
      .catch((error) => alertError(error));
  }, []);

  return (
    <S.PageContainer>
      <S.ArticleContainer>
        <Link to="/add-bets">
          <S.Article>
            <span>{startCup ? "Meus placares" : "Adicionar Placar"}</span>
          </S.Article>
        </Link>
        <Link to="/games">
          <S.Article>
            <span>Jogos</span>
          </S.Article>
        </Link>
        <Link to="/ranking">
          <S.Article>
            <span>Ranking</span>
          </S.Article>
        </Link>
        <Link to="/rules">
          <S.Article>
            <span>Regras</span>
          </S.Article>
        </Link>
      </S.ArticleContainer>
      {userBets?.length < CUP_GAMES ? (
        <S.FirstMessage>
          Ainda faltam preencher alguns placares! <br />
          Clique em "Adicionar Placar" para terminar
        </S.FirstMessage>
      ) : games[games?.length - 1]?.score1 && todayGames ? (
        <S.EndMessage>Clique no ranking para ver os vencedores!!!</S.EndMessage>
      ) : todayGames ? (
        <S.GamesHome>
          <S.HomeInfo>A seguir</S.HomeInfo>
          {todayGames?.map((game) => {
            return <GameResult key={game.id} game={game} />;
          })}
        </S.GamesHome>
      ) : (
        <LoadingHome />
      )}
    </S.PageContainer>
  );
};
