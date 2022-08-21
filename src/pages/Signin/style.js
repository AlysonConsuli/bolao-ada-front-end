import styled from "styled-components";

export const AuthContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBackground};
  height: 100%;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: underline;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 17px;
  }
`;

export const BoxAuthLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin-bottom: 18px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h1 {
    font-size: 44px;
    margin-bottom: 7px;
    text-align: center;
  }
  span {
    font-size: 17px;
    text-align: center;
  }
`;
