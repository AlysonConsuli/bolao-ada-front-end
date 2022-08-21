import styled from "styled-components";

export const Users = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin: 10px 0 20px 0;
`;

export const rankingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;
