import styled from "styled-components";

export const Bet = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 500px;
  border-radius: 6px;
  position: relative;
  padding: 0 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border: ${(props) => (props.myBet ? "3px solid #00a000" : "")};
`;

export const UserName = styled.span`
  font-size: 18px;
  width: 39%;
  font-weight: 700;
  word-break: break-word;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word; */
`;

export const Points = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
