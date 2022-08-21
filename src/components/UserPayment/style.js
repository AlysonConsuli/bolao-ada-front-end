import styled from "styled-components";

import { FiCheckCircle } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
import { FiRefreshCw } from "react-icons/fi";

export const UserPayment = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 500px;
  border-radius: 6px;
  padding: 0 10px 0 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  position: relative;
  span {
    font-size: 17px;
    font-weight: 700;
  }
`;

export const TrueIcon = styled(FiCheckCircle)`
  font-size: 21px;
  color: green;
`;

export const FalseIcon = styled(FiXCircle)`
  font-size: 21px;
  color: red;
`;

export const ChangeIcon = styled(FiRefreshCw)`
  font-size: 21px;
  position: absolute;
  right: -29px;
  cursor: pointer;
  @media (max-width: 374px) {
    right: -26px;
  }
`;
