import styled from "styled-components";

import { FiEye } from "react-icons/fi";

export const GameResult = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  max-width: 500px;
  border-radius: 6px;
  position: relative;
  padding: 0 5px;
  margin-right: 18px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

export const EyeIcon = styled(FiEye)`
  font-size: 21px;
  position: absolute;
  right: -29px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.svg};
  @media (max-width: 374px) {
    right: -26px;
  }
`;
