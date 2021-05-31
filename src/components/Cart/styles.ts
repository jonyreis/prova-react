import styled from 'styled-components'

interface IBackdropProps {
  isBackdrop: boolean
}

export const Backdrop = styled.div<IBackdropProps>`
  display: ${props => props.isBackdrop ? 'block' : 'none'};
  position: absolute;
  top: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 10;
  @media (min-width: 901px) {
    display: 'none'
  }
`

interface ICartContainerProps {
  cartMobile: boolean
}

export const CartContainer = styled.section<ICartContainerProps>`
  background-color: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;

  display: block;

  width: 100%;
  min-height: 560px;
  max-height: 600px;
  padding: 32px 16px 0;
  position: relative;
  @media (max-width: 900px) {
    display: ${props => props.cartMobile ? 'block' : 'none'};
    
    border: none;
    border-radius: 0;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);

    min-width: 300px;
    max-width: 340px;
    min-height: 100vh;
    max-height: 100vh;
    padding: 32px 16px 0;
    position: fixed;
    top: 0;
    right: -16px;
    margin: 0;
    
    z-index: 100;

    @media (min-height: 813px) {
      min-height: 80vh;
      max-height: 80vh;
    }
  }
  h3 {
    color: #707070;
    font-style: italic;
    font-size: 24px;
    font-weight: bold;
  }
`

export const BtnClose = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 32px;
  right: 16px;
  @media (min-width: 901px) {
    display: none;
  }
`

export const Bets = styled.div`
  max-height: 340px;
  overflow: auto;

  @media (max-width: 900px) {
    max-height: calc(100vh - 260px);
    @media (min-height: 813px) {
      max-height: calc(80vh - 260px);
    }
  }
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #ddd;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 8px;
  }
`

export const Bet = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 9fr;
  align-items: center;
  justify-items: center;

  margin: 16px 0;
`

export const ButtonnRemoveBet = styled.button`
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  padding: 4px;

  img {
    width: 20px;
    cursor: pointer;
  }
`

export const Separator = styled.div`
  content: "";
  display: inline-block;
  border-radius: 100px 0px 0px 100px;
  width: 4px;
  height: 86px;
`

export const BetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: left;

  text-align: left;

  margin-left: 14px;
`

export const ArrayNumbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  word-break: break-word;
  
  h4 {
    color: #868686;

    font-size: 15px;
    font-style: italic;
    font-weight: bold;
    letter-spacing: 0px;

    &::after {
      content: ',';
      display: inline-block;
      
      margin-right: 4px;
      &:last-child {
        display: none;
      }
    }
    &:last-child {
      &::after {
      display: none;
      }
    }
  }
`

export const TypeAndPrice = styled.div`
  strong {
    color: #7f3992;
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
  }

  span {
    color: #868686;
    margin-left: 8px;
  }
`

export const Total = styled.div`
  background-color: #fff;
  color: #868686;

  padding: 4px;
  position: absolute;
  bottom: 140px;

  h2 {
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    span {
      font-style: italic;
      font-weight: bold;
    }
  }
`

export const Save = styled.div`
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

  button {
    border: none;

    background-color: transparent;
    color: #27c383;
    font-size: 35px;
    font-style: italic;
    font-weight: bold;
    cursor: pointer;
    padding: 32px;
  }

  img {
    color: #27c383;
    width: 24px;
  }
`