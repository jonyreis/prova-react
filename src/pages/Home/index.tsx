/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
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

interface IListWithFilter {
  numbers: Array<number>
  type: string
  color: string
  price: number
  key: string
  date: string
}

const Home = () => {
  const [selectedFilter, setSelectedFilter] = React.useState<string>('')
  const [listWithFilter, setListWithFilter] = React.useState<Array<IListWithFilter>>([])
  
  const { bets } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  React.useEffect(() => {
    getGame()
  },[])

  React.useEffect(() => {
    setListWithFilter(bets)
  }, [])

  React.useEffect(() => {
    if (selectedFilter === '') return setListWithFilter(bets)
    
    const filteredList = bets.filter((bet: { type: string }) => {
      if (bet.type === selectedFilter) return bet.type === selectedFilter
    })

    setListWithFilter(filteredList)
  }, [selectedFilter])
  
  async function getGame() {

    const responseApi = await api.get(`/register`)
    console.log(responseApi)
    
    const response = await fetch('games.json')
      .then(res => res.json())

    const listGame = response.types.map((item: {
      color: string; 
      type: string; 
      description: string;
      ['max-number']: number;
      ['min-cart-value']: number;
      price: number; 
      range: number; 
    }) => {
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
          {listWithFilter.map((bet) => 
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