import styled from "styled-components";

import { FiCheck } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

export const Game = styled.form`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  max-width: 500px;
  border-radius: 6px;
  position: relative;
  padding: 0 5px;
  margin-right: ${(props) => (props.$startCup ? "0" : "18px")};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

export const BoxInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: calc(50% - 38px);
  gap: 4px;
  width: 76px;
  span {
    font-size: 22px;
    font-weight: 700;
    padding: 0 10px;
  }
`;

export const CheckBox = styled.button`
  display: ${(props) => (props.$startCup ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  background-color: ${(props) => (props.$hasBet ? "#00a000" : "grey")};
  position: absolute;
  right: -31px;
  padding: 0;
  border: none;
  cursor: pointer;
  top: ${(props) => props.$hasBet && "4px"};
  box-shadow: ${(props) =>
    props.$hasBet ? "0 0 0" : "4px 4px 4px rgba(0, 0, 0, 0.25)"};
  @media (max-width: 374px) {
    right: -28px;
  }
`;

export const CheckIcon = styled(FiCheck)`
  font-size: 19px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const EditIcon = styled(FiEdit)`
  display: ${(props) => (!props.$hasBet || props.$startCup ? "none" : "block")};
  font-size: 21px;
  cursor: pointer;
  position: absolute;
  right: -29px;
  bottom: 3px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.svg};
  @media (max-width: 374px) {
    right: -26px;
  }
`;

export const TeamName = styled.span`
  font-family: initial;
  font-size: 17px;
  width: 37%;
  &:nth-child(3) {
    text-align: right;
  }
`;
