import styled from "styled-components";

export const Rules = styled.div`
  margin: 20px 15px 10px 30px;
  color: white;
  font-weight: 700;
  h1 {
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
    padding-right: 15px;
  }
  h2 {
    font-size: 20px;
    text-align: center;
    margin-top: 38px;
    padding-right: 15px;
  }
  ul {
    list-style-type: disc;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 525px) {
      align-items: center;
    }
  }
`;
