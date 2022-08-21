import styled from "styled-components";

export const GameInput = styled.div`
  input {
    padding-left: 10px;
    width: 30px;
    height: 30px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    font-family: ${({ theme }) => theme.fonts.mainFont};
    font-weight: 700;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.main};
    border: 1px solid ${({ theme }) => theme.colors.main};
    ::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
