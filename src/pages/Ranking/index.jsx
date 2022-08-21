/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Loading } from "../../components/Loading/index.jsx";
import { User } from "../../components/User/index.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as S from "../../styles/style.js";
import { alertError } from "../../utils/alertError.js";
import { config } from "../../utils/config.js";

export const Ranking = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);

  const [ranking, setRanking] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/users/ranking`, config(user))
      .then(({ data }) => setRanking(data.ranking))
      .catch((error) => alertError(error));
  }, []);

  if (ranking === null) {
    return <Loading />;
  }

  return (
    <S.PageContainer>
      <S.rankingHeader>
        <span>Name</span>
        <span>Points</span>
        <span>Position</span>
      </S.rankingHeader>
      <S.Users>
        {ranking?.map((user, i) => (
          <User key={user.id} user={user} />
        ))}
      </S.Users>
    </S.PageContainer>
  );
};
