import styled from 'styled-components'

export const NewBetContainer = styled.div`
  background-color: #F7F7F7;
  min-height: calc(100vh - 80px);
  @media (max-width: 900px) {
    min-height: 100vh;
  }
`

export const Main = styled.main`
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
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 80px 0 0;
  }
  section {
    margin: 0 16px;
  }
`

export const IntroNewBet = styled.div`
  @media (max-width: 900px) {
    background-color: #F7F7F7;
    position: fixed;
    width: calc(100vw - 32px);
    margin-top: -4px;
  }
  h2 {
    color: #707070;
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    margin: 32px 0;
    text-transform: uppercase;
    @media (max-width: 900px) {
      margin: 16px 0;
    }
    @media (max-width: 370px) {
      font-size: 22px;
    }
    @media (max-width: 350px) {
      font-size: 20px;
    }
    span {
      font-weight: 700;
    }
  }
  ul {
    display: flex;
    margin: 24px 0;
    max-width: 100%;
  }
`

export const ChooseAGame = styled.strong`
  color: #707070;
  font-style: italic;
  font-size: 17px;
`
export const DescriptionGame = styled.div`
  color: #868686;
  font-size: 17px;
  font-style: italic;

  margin: 40px 0;
  @media (max-width: 900px) {
    margin: 16px 0;
    max-width: 90%;
  }
  @media (max-width: 760px) {
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 420px) {
    h4 {
      display: none;
    }
    p {
      display: none;
    }
  }
`

export const NumbersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 720px;
  @media (max-width: 900px) {
    margin-top: 280px;
    padding-bottom: 100px;
  }
  @media (max-width: 420px) {
    margin-top: 220px;
  }
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
  @media (max-width: 900px) {
    display: none;
  }
  button {
    padding: 16px 28px;
    cursor: pointer;
    height: 52px;
  }
`

export const ActionButtonsMobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 500px;
  margin: 10px 0;
  @media (min-width: 901px) {
    display: none;
  }
  @media (max-width: 420px) {
    margin: 16px 0;
  }
  @media (max-width: 370px) {
    margin: 30px 0 10px;
  }

  button {
    padding: 16px 32px;
    cursor: pointer;
    height: 52px;
    @media (max-width: 470px) {
      padding: 8px 16px;
    }
    @media (max-width: 470px) {
      padding: 6px 12px;
      height: 44px;
    }
    @media (max-width: 350px) {
      padding: 6px;
    }
  }
  .empty-buttons {
    border: 1px solid #27c383;
    border-radius: 10px;
    background-color: transparent;
    color: #27c383;
    font-weight: 500;
  }
`

export const EmptyButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  @media (max-width: 900px) {
    max-width: 100%;
  }
  button {
    border: 1px solid #27c383;
    border-radius: 10px;
    background-color: transparent;
    color: #27c383;
    font-weight: 500;
  }
`

export const CartButton = styled.button`
  border: 1px solid #27c383;
  border-radius: 10px;
  background-color: #27c383;
  color: #fff;
  font-weight: 700;

  display: flex;
  align-items: center;
  img {
    margin-right: 28px;
    @media (max-width: 900px) {
      margin-right: 14px;
    }
    @media (max-width: 400px) {
      display: none;
    }
  }
`