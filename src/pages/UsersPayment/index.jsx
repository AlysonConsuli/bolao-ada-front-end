/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Loading } from "../../components/Loading/index.jsx";
import { UserPayment } from "../../components/UserPayment/index.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as S from "../../styles/style.js";
import { alertError } from "../../utils/alertError.js";
import { config } from "../../utils/config.js";

export const UsersPayment = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext);

  const [users, setUsers] = useState(null);

  const adminConfig = config(user);
  useEffect(() => {
    axios
      .get(`${URL}/users`, adminConfig)
      .then(({ data }) => setUsers(data.users))
      .catch((error) => alertError(error));
  }, []);

  if (users === null) {
    return <Loading />;
  }

  return (
    <S.PageContainer>
      <S.rankingHeader>
        <span>Name</span>
        <span>It's paid?</span>
      </S.rankingHeader>
      <S.Users>
        {users?.map((user) => (
          <UserPayment key={user.id} user={user} config={adminConfig} />
        ))}
      </S.Users>
    </S.PageContainer>
  );
};
