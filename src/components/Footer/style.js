import styled from "styled-components";

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: calc(100vw / 12) solid transparent;
  border-right: calc(100vw / 12) solid transparent;
  border-bottom: calc(100vw / 12) solid ${({ theme }) => theme.colors.secondary};
  @media (min-width: 500px) {
    border-left: calc(100vw / 24) solid transparent;
    border-right: calc(100vw / 24) solid transparent;
    border-bottom: calc(100vw / 24) solid
      ${({ theme }) => theme.colors.secondary};
  }
`;

export const BoxTriangle = styled.div`
  display: flex;
  position: fixed;
  bottom: calc(100vw / 6 - 1px);
  div:nth-child(7),
  div:nth-child(8),
  div:nth-child(9),
  div:nth-child(10),
  div:nth-child(11),
  div:nth-child(12) {
    display: none;
  }
  @media (min-width: 425px) {
    bottom: 0;
    div:nth-child(7),
    div:nth-child(8),
    div:nth-child(9),
    div:nth-child(10),
    div:nth-child(11),
    div:nth-child(12) {
      display: block;
    }
  }
  @media (max-height: 635px) {
    display: none;
  }
  @media (max-width: 350px) {
    display: none;
  }
`;

export const AuthFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: calc(100vw / 6);
  position: fixed;
  bottom: 0;
  @media (min-width: 425px) {
    display: none;
  }
  @media (max-height: 635px) {
    display: none;
  }
  @media (max-width: 350px) {
    display: none;
  }
`;
