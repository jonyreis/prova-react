import styled from 'styled-components'

export const NewBetContainer = styled.div`
  background-color: #F7F7F7;
  min-height: calc(100vh - 80px);
  main {
    display: grid;
    grid-template-columns: auto 320px;
    gap: 40px;

    max-width: 1080px;
    margin: 0 auto;
    padding: 40px 0;
    @media (max-width: 1090px) {
      padding: 40px 32px;
      gap: 20px;
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
      /* display: grid;
      grid-template-columns: repeat(9, 1fr); */
      display: flex;
      /* justify-content: space-around; */
      flex-wrap: wrap;
      /* gap: 10px; */
      max-width: 720px;
    }
    .container-action-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 40px;
      button {
        padding: 16px 28px;
        cursor: pointer;
        height: 52px;
      }
    }
    .button-empty {
      display: flex;
      justify-content: space-between;
      width: 300px;
      button {
        border: 1px solid #27c383;
        border-radius: 10px;
        background-color: transparent;
        color: #27c383;
        font-weight: 500;
      }
    }
    .button-cart {
      border: 1px solid #27c383;
      border-radius: 10px;
      background-color: #27c383;
      color: #fff;
      font-weight: 700;

      display: flex;
      align-items: center;
      img {
        margin-right: 28px;
      }
    }
  }
`