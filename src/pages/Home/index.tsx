import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

import convertToCurrency from '../../utils/convertToCurrency';

import Header from "../../components/Header"
import GamesBtn from '../../components/GamesBtn';

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

import api from '../../services/api'

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

interface IGame {
  color: string 
  type: string 
  price: number 
} 

interface IListWithFilter {
  id: number
  game: IGame
  numbers: string
  key: string
  created_at: string
}

const Home = () => {
  const [selectedFilter, setSelectedFilter] = React.useState<string>('')
  const [listWithFilter, setListWithFilter] = React.useState<Array<IListWithFilter>>([])
  
  const { auth, bets } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    getGame()
  },[])

  React.useEffect(() => {
    if (selectedFilter === '') return setListWithFilter(bets)

    const filteredList = bets.filter((bet: { game: { type: string; } }) => {
      if (bet.game.type === selectedFilter) return bet
    })

    setListWithFilter(filteredList)
  }, [selectedFilter])

  async function getGame() {
    const games = await api.get('/games', { 
      headers: {
        "Authorization": `Bearer ${auth.token}`
      }
    })

    const bets = await api.get('/game/bets', { 
      headers: {
        "Authorization": `Bearer ${auth.token}`
      }
    })


    const listGame = games.data.map((item: {
      id: number;
      color: string; 
      type: string; 
      description: string;
      ['max_number']: number;
      ['min_cart_value']: number;
      price: number; 
      range: number; 
    }) => {
      return {
        id: item.id,
        color: item.color,
        type: item.type,
        description: item.description,
        maxNumber: item['max_number'],
        minCartValue: item['min_cart_value'],
        price: item.price,
        range: item.range
      }
    })

    dispatch({
      type: 'ADD_GAMES',
      payload: listGame
    })

    dispatch({
      type: 'SAVE_BETS',
      payload: bets.data
    })

    console.log(bets.data)
    setListWithFilter(bets.data)
  }

  return (
    <HomeContainer>
      <Header />
      <Main>
        <FiltersAndLink>
          <FiltersContainer>
            <h2>Recent games</h2>
            <span>Filters </span>
            <ul>
              <GamesBtn 
                setSelectedFilter={setSelectedFilter}
              />
            </ul>
          </FiltersContainer>
          <NewBet to="/new-bet">New Bet <img src={ArrowRightGreen} alt="" /></NewBet>
        </FiltersAndLink>
          <Bets>
            {listWithFilter.map((bet: { id: number, numbers: string, game: IGame, created_at: string}) =>
              <Bet key={bet.id}>
                <Separator color={bet.game?.color} />
                <BetInfo>
                  <Numbers>
                    <h4>{bet.numbers}</h4>
                  </Numbers>
                  <DateAndPrice>{bet['created_at']} - ({convertToCurrency(bet.game?.price || 0)})</DateAndPrice>
                  <TypeBet color={bet.game?.color}>{bet.game?.type}</TypeBet>
                </BetInfo>
              </Bet>  
            )}
          </Bets>
      </Main>
    </HomeContainer>
  )
}

export default Home