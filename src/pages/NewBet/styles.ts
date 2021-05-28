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
    width: 100%;
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
  @media (max-width: 670px) {
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
`

export const NumbersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 720px;
  @media (max-width: 900px) {
    margin-top: 260px;
    padding-bottom: 100px;
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

export const EmptyButtons = styled.div`
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
  }
`