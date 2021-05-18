import styled from "styled-components";

export const IntroContainer = styled.section`
  background-color: #f7f7f7;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  height: 100vh;
  width: 100%;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const GridLeft = styled.section`
  color: #707070;
  display: grid;
  justify-items: center;
  @media (max-width: 800px) {
    display: none;
  }
  h1 {
    font-style: italic;
    font-weight: bold;
    text-align: center;
  }
  .the-geatest {
    font-size: 65px;
    width: 240px;
  }
  .lottery {
    font-size: 83px;
  }
  span {
    background-color: #b5c401;
    border-radius: 100px;
    color: #fff;
    font-weight: bold;
    font-style: italic;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 144px;
    height: 39px;
    margin: 16px 0;
  }
`;

export const GridRight = styled.section`
`