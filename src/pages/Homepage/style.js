import styled from "styled-components";

import { FiLogOut } from "react-icons/fi";

export const PageContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h1 {
    padding-left: 20px;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.text};
  }
  svg {
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const LogoutIcon = styled(FiLogOut)`
  font-size: 25px;
  cursor: pointer;
`;

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 70%;
  max-width: 350px;
  @media (max-width: 350px) {
    width: 0;
    gap: 15px;
  }
`;

export const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  span {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondaryBackground};
  }
`;

export const GamesHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Time = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  padding-right: 17px;
  margin-top: 12px;
`;

export const HomeInfo = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  position: absolute;
  left: 20px;
  top: 0;
`;

export const EndMessage = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
