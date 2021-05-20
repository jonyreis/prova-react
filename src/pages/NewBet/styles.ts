import styled from 'styled-components'

export const NewBetContainer = styled.div`
  background-color: #F7F7F7;
  min-height: calc(100vh - 80px);
  main {
    display: grid;
    grid-template-columns: auto 320px;
    gap: 40px;

    width: 1040px;
    margin: 0 auto;
    padding: 40px 0;
    @media (max-width: 1040px) {
      padding: 0 32px;
    }
  }
  .main-section {
    h2 {
      color: #707070;
      font-size: 24px;
      font-weight: 300;
      font-style: italic;
      margin: 32px 0;
      text-transform: uppercase;
      span {
        font-weight: 700;
      }
    }
    .choose-a-game {
      color: #707070;
      font-style: italic;
      font-size: 17px;
    }
    .description-game {
      color: #868686;
      font-size: 17px;
      font-style: italic;

      margin: 40px 0;
    }
    ul {
      display: flex;
      margin: 24px 0;
    }
    .numbers-container {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      gap: 20px;
    }
    .number {
      background-color: #adc0c4;
      border: none;
      border-radius: 50%;
      color: #fff;
      font-size: 20px;
      font-weight: bold;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 65px;
      height: 65px;
      cursor: pointer;
    }
    .selected {
      background-color: #27c383;
    }

  }
`