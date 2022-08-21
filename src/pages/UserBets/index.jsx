/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { UserBet } from "../../components/UserBet";
import { UserContext } from "../../contexts/UserContext";
import * as S from "../../styles/style.js";
import { alertError } from "../../utils/alertError";
import { config } from "../../utils/config";

export const UserBets = () => {
  const { userId } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);

  const [bets, setBets] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/bets/user/${userId}`, config(user))
      .then(({ data }) => setBets(data.bets))
      .catch((error) => alertError(error));
  }, []);

  if (bets === null) {
    return <Loading />;
  }

  return (
    <S.PageContainer>
      <S.GameBets>
        <h2>
          {bets[0]?.user
            ? `${bets[0]?.user.name} bets`
            : "There are no bets for this user"}
        </h2>
        {bets?.map((bet) => (
          <UserBet key={bet.id} bet={bet} />
        ))}
      </S.GameBets>
    </S.PageContainer>
  );
};
