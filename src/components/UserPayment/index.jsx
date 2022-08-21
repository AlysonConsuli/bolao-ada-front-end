import axios from "axios";
import { useState } from "react";
import * as S from "../../styles/style.js";
import { alertError } from "../../utils/alertError.js";

export const UserPayment = ({ user, config }) => {
  const { id, isPaid } = user;
  const URL = process.env.REACT_APP_API_URL;
  const [hasPayment, setHasPayment] = useState(isPaid);

  const handlePayment = () => {
    axios
      .post(`${URL}/user/payment`, { id, isPaid: !hasPayment }, config)
      .then(() => setHasPayment(!hasPayment))
      .catch((error) => alertError(error));
  };

  if (user.name === "admin") {
    return <></>;
  }

  return (
    <S.UserPayment>
      <span>{user.name}</span>
      {hasPayment ? <S.TrueIcon></S.TrueIcon> : <S.FalseIcon></S.FalseIcon>}
      <S.ChangeIcon onClick={handlePayment}></S.ChangeIcon>
    </S.UserPayment>
  );
};
