/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import * as S from "../../styles/style.js";
import { UserContext } from "../../contexts/UserContext.jsx";
import { alertError } from "../../utils/alertError.js";

export const Signin = () => {
  const URL = `${process.env.REACT_APP_API_URL}/sign-in`;

  const [userSignin, setUserSignin] = useState({
    name: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setDisabled(true);
    try {
      const res = await axios.post(URL, userSignin);
      const { name, token } = res.data;
      setUser({ ...user, name, token });
      const userSerialized = JSON.stringify({
        name,
        token,
      });
      localStorage.setItem("user", userSerialized);
    } catch (error) {
      setDisabled(false);
      alertError(error);
    }
  }

  return (
    <S.AuthContainer>
      <S.BoxAuthLogo>
        <h1>Bolão ADA</h1>
        <span>
          a melhor maneira de vivenciar uma
          <br /> copa do mundo
        </span>
      </S.BoxAuthLogo>
      <S.AuthForm onSubmit={handleLogin}>
        <Input
          type="text"
          name="username"
          id="username"
          required
          placeholder="nome"
          onChange={(e) =>
            setUserSignin({ ...userSignin, name: e.target.value })
          }
          value={userSignin.name}
          disabled={disabled}
          message="Nome inválido"
        />
        <Input
          type="password"
          name="password"
          id="password"
          required
          placeholder="senha"
          onChange={(e) =>
            setUserSignin({ ...userSignin, password: e.target.value })
          }
          value={userSignin.password}
          disabled={disabled}
          minLength="4"
          message="Mínimo de 4 caracteres"
        />
        <Button type="submit" disabled={disabled} text="Login" />
        <Link to="/sign-up">
          <span>Primeira vez? Crie a sua conta aqui!</span>
        </Link>
      </S.AuthForm>
    </S.AuthContainer>
  );
};
