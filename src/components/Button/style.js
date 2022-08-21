import styled from "styled-components";

export const Button = styled.button`
  width: 30vw;
  height: 65px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-weight: 700;
  font-size: 27px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 13px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 88vw;
    height: 55px;
    font-size: 22px;
    margin-top: 12px;
  }
`;
