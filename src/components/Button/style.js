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
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 88vw;
    height: 55px;
    font-size: 22px;
    margin-top: 12px;
  }
`;
