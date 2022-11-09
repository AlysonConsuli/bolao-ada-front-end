import styled from "styled-components";

import { FiLogOut } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

export const PagesHeader = styled.header`
  padding-left: 15px;
  position: sticky;
  z-index: 11;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h1 {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 700;
  }
  svg {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
`;

export const LogoutIcon = styled(FiLogOut)`
  font-size: 25px;
  cursor: pointer;
`;

export const BackIcon = styled(FiArrowLeft)`
  font-size: 25px;
  cursor: pointer;
`;

export const HomeIcon = styled(FaHome)`
  font-size: 25px;
  cursor: pointer;
`;
