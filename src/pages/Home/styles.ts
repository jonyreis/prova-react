import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
  background-color: #F7F7F7;
  height: calc(100vh - 79px);
  @media (max-width: 900px) {
    height: 100vh;
  }
`

export const Main = styled.main`
  max-width: 1040px;
  margin: 0 auto;
  padding-top: 80px;
  @media (max-width: 1100px) {
    padding: 80px 36px 0;
  }
  @media (max-width: 670px) {
    padding: 32px 16px 0;
  }
`

export const FiltersAndLink = styled.section`
  display: flex;
  align-items: center;
`

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 630px;

  @media (max-width: 670px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    
    min-width: 100%;
    height: 120px;
  }

  h2 {
    color: #707070;
    font-size: 24px;
    font-style: italic;
    text-transform: uppercase;
  }

  span {
    color: #868686;
    font-size: 17px;
    font-style: italic;
  }
  ul {
    display: flex;
    justify-content: center;
  }
`

export const NewBet = styled(Link)`
  color: #B5C401;
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
  text-decoration: none;

  display: flex;
  align-items: center;

  margin-left: auto;
  @media (max-width: 900px) {
    display: none;
  }
  img {
    margin-left: 8px;
  }
`

export const Bets = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 310px);
  padding: 16px 0;
  margin: 16px 0;
  overflow: auto;

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
  @media (max-width: 670px) {
    max-height: calc(100vh - 340px);
  }
`

export const Bet = styled.li`
  display: flex;
  margin: 16px 0;
  align-items: center;
  .bet-info {
    display: flex;
    flex-direction: column;
    .numbers {
      display: flex;
    }
  }
`

interface ISeparatorProps {
  color: string
}

export const Separator = styled.div<ISeparatorProps>`
  content: "";
  border-radius: 100px;
  background-color: ${props => props.color};
  display: inline-block;

  width: 6px;
  height: 94px;
  margin-right: 16px;
`

export const BetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
`

export const Numbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  h4 {
    color: #868686;

    font-size: 20px;
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
    @media (max-width: 540px) {
      font-size: 16px;
    }
  }
`

export const DateAndPrice = styled.h3`
  color: #868686;
  font-size: 17px;
  font-weight: 400;
  @media (max-width: 540px) {
    font-size: 14px;
  }
`

interface ITypeBetProps {
  color: string
}

export const TypeBet = styled.h2<ITypeBetProps>`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
  @media (max-width: 540px) {
    font-size: 16px;
  }
`