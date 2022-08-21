import styled from "styled-components";

export const Input = styled.div`
  input {
    width: 30vw;
    height: 65px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 6px;
    font-family: ${({ theme }) => theme.fonts.mainFont};
    font-weight: 700;
    font-size: 27px;
    color: ${({ theme }) => theme.colors.main};
    margin-top: 13px;
    padding-left: 17px;
    border: 1px solid ${({ theme }) => theme.colors.main};
    ::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  span {
    color: ${({ theme }) => theme.colors.error};
    font-weight: 400;
    font-size: 13px;
    padding: 5px;
    width: 30vw;
    display: none;
  }
  input:invalid[focused="true"] {
    border: 1px solid ${({ theme }) => theme.colors.error};
  }
  input:invalid[focused="true"] ~ span {
    display: block;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    input {
      width: 88vw;
      height: 55px;
      font-size: 22px;
      margin-top: 12px;
    }
    span {
      font-size: 12px;
      width: 88vw;
    }
  }
`;
