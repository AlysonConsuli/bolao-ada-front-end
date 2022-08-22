import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../../components/Button/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import * as S from "../../styles/style.js";
import { alertError } from "../../utils/alertError.js";

export const SignUp = () => {
  const navigate = useNavigate();
  const URL = `${process.env.REACT_APP_API_URL}/sign-up`;

  const [userSignup, setUserSignup] = useState({
    name: "",
    password: "",
    passwordConfirmation: "",
  });
  const [disabled, setDisabled] = useState(false);

  async function createUser(e) {
    e.preventDefault();
    setDisabled(true);
    try {
      await axios.post(URL, userSignup);
      navigate("/");
    } catch (error) {
      setDisabled(false);
      alertError(error);
    }
  }

  return (
    <S.AuthContainer>
      <S.BoxAuthLogo>
        <h1>Bolão ADA</h1>
        <span>a melhor maneira de vivenciar uma copa do mundo</span>
      </S.BoxAuthLogo>
      <S.AuthForm onSubmit={createUser}>
        <Input
          type="text"
          name="name"
          id="name"
          required
          placeholder="nome"
          onChange={(e) =>
            setUserSignup({ ...userSignup, name: e.target.value })
          }
          value={userSignup.name}
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
            setUserSignup({ ...userSignup, password: e.target.value })
          }
          value={userSignup.password}
          disabled={disabled}
          minLength="4"
          message="Mínimo de 4 caracteres"
        />
        <Input
          type="password"
          name="passwordConfirmation"
          id="passwordConfirmation"
          required
          placeholder="Confirme a senha"
          onChange={(e) =>
            setUserSignup({
              ...userSignup,
              passwordConfirmation: e.target.value,
            })
          }
          value={userSignup.passwordConfirmation}
          disabled={disabled}
          message="Senhas não coincidem"
        />
        <Button type="submit" disabled={disabled} text="Cadastrar" />
        <Link to="/">
          <span>Voltar para fazer login</span>
        </Link>
      </S.AuthForm>
    </S.AuthContainer>
  );
};
