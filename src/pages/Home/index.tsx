import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

import convertToCurrency from '../../utils/convertToCurrency';

import Header from "../../components/Header"
import GamesBtn from '../../components/GamesBtn';

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

import { 
  HomeContainer, 
  Main, 
  FiltersAndLink, 
  FiltersContainer, 
  Bets,
  Bet,
  Separator,
  Numbers,
  BetInfo,
  DateAndPrice,
  TypeBet,
  NewBet
 } from './styles'
import { IGames } from '../../store/modules/games/types';

const Home = () => {
  const [selectedGame, setSelectedGame] = React.useState<IGames>({
    type: '', 
    color: '', 
    description: '',
    maxNumber: 0,
    minCartValue: 0,
    price: 0,
    range: 0
  })

  const dispatch = useDispatch()
  const { bets } = useSelector((state: RootStateOrAny) => state)

  async function getGame() {
    const response = await fetch('games.json')
    .then(res => res.json())

    const listGame = response.types.map((item: any) => {
      return {
        color: item.color,
        type: item.type,
        description: item.description,
        maxNumber: item['max-number'],
        minCartValue: item['min-cart-value'],
        price: item.price,
        range: item.range
      }
    })

    dispatch({
      type: 'ADD_GAMES',
      payload: listGame
    })
  }

  React.useEffect(() => {
    getGame()
  },[])

  return (
    <HomeContainer>
      <Header />
      <Main>
        <FiltersAndLink>
          <FiltersContainer>
            <h2>Recent games</h2>
            <span>Filters </span>
            <ul>
              <GamesBtn setSelectedGame={setSelectedGame} />
            </ul>
          </FiltersContainer>
          <NewBet to="/new-bet">New Bet <img src={ArrowRightGreen} alt="" /></NewBet>
        </FiltersAndLink>
        <Bets>
          {bets.map((bet: 
            { 
              numbers: Array<number>; 
              color: string; 
              date: string;
              price: number; 
              type: string; 
              key: string 
            }) => 
            <Bet key={bet.key}>
              <Separator color={bet.color} />
              <BetInfo>
                <Numbers>
                  {bet.numbers.map((number: number) => 
                    <h4 key={number}>{String(number).padStart(2, '0')}</h4>
                  )}
                </Numbers>
                <DateAndPrice>{bet.date} - ({convertToCurrency(bet.price)})</DateAndPrice>
                <TypeBet color={bet.color}>{bet.type}</TypeBet>
              </BetInfo>
            </Bet>  
          )}
        </Bets>
      </Main>
    </HomeContainer>
  )
}

export default Home