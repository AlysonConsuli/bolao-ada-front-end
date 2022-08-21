/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Result } from "../../components/Result";
import { UserContext } from "../../contexts/UserContext";
import * as S from "../../styles/style.js";
import { alertError } from "../../utils/alertError";
import { config } from "../../utils/config";

export const Results = () => {
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
      <S.GameBets>
        {games?.map((game) => (
          <Result key={game.id} game={game} />
        ))}
      </S.GameBets>
    </S.PageContainer>
  );
};
