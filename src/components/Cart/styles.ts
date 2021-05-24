import styled from 'styled-components'

export const CartContainer = styled.section`
  background-color: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;

  width: 100%;
  min-height: 560px;
  max-height: 600px;
  padding: 32px 16px 0;
  position: relative;

  h3 {
    color: #707070;
    font-style: italic;
    font-size: 24px;
    font-weight: bold;
  }

  .bets {
    max-height: 340px;
    overflow: auto;
  }

  .bets::-webkit-scrollbar {
    width: 6px;
  }

  .bets::-webkit-scrollbar-track {
    background: #ddd;
  }

  .bets::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 8px;
  }

  .empty-cart {
    color: #707070;
    font-size: 16px;
    text-align: center;
    margin-top: 32px;
  }

  .bet {
    display: grid;
    grid-template-columns: 9fr 1.5fr 1fr;
    direction: rtl;
    align-items: center;

    margin: 16px 0;
  }

  .bet img {
    width: 20px;
    cursor: pointer;
  }


  .total {
    background-color: #fff;
    color: #868686;

    padding: 4px;
    position: absolute;
    bottom: 140px;
  }

  .total h2 {
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .total h2 span {
    font-style: italic;
    font-weight: bold;
  }

  .save {
    background-color: #f4f4f4;
    border: 1px solid #e2e2e2;
    border-radius: 0 0 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100px;

    position: absolute;
    bottom: 0;
    left: 0;
  }

  .save button {
    border: none;

    background-color: transparent;
    color: #27c383;
    font-size: 35px;
    font-style: italic;
    font-weight: bold;
    cursor: pointer;
    padding: 32px;
  }

  .save img {
    color: #27c383;
    width: 24px;
  }
`