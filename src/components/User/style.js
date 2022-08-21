import styled from "styled-components";

export const User = styled.div`
  border: ${(props) => (props.myRanking ? "2px solid #00a000" : "")};
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 500px;
  border-radius: 6px;
  padding: 0 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  position: relative;
  span {
    width: 22px;
    text-align: center;
    font-weight: 700;
  }
  span:first-child {
    width: 39%;
    text-align: left;
    font-size: 17px;
    font-weight: 700;
    word-break: break-word;
  }
  span:nth-child(2) {
    position: absolute;
    left: 45%;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    span:nth-child(2) {
      left: 47%;
    }
  }
`;

export const Rank = styled.span`
  background-color: ${(props) => props.pos === 1 && "#ffd700"};
  background-color: ${(props) => props.pos === 2 && "#9a9a9a"};
  background-color: ${(props) => props.pos === 3 && "#cd7f32"};
  border-radius: 50%;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
