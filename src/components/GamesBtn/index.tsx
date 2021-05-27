
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, RootStateOrAny } from 'react-redux'

import { IGames } from '../../store/modules/games/types'

import { GamesBtnContainer } from './styles'

interface IGamesBtnProps {
  setSelectedGame?: React.Dispatch<React.SetStateAction<IGames>> | any
  setSelectedFilter?: React.Dispatch<React.SetStateAction<string>> | any
}

const GamesBtn = ({ setSelectedGame,  setSelectedFilter }: IGamesBtnProps) => {
  const { games } = useSelector((state: RootStateOrAny) => state)
  const { pathname } = useLocation()

  return (
    <>
      {games.map((item: {
        type: string,
        color: string,
        description: string,
        maxNumber: number,
        minCartValue: number,
        price: number,
        range: number
      }) =>
        <GamesBtnContainer color={item.color} key={item.color}>
          {pathname === '/new-bet' &&
            <input 
              onClick={() => setSelectedGame(item)}
              type="radio" 
              name="game" 
              id={item.type} 
              value={item.type} 
            />
          }
          {pathname === '/home' && 
            <input 
              onClick={() => setSelectedFilter(item.type)} 
              type="radio" 
              name="game" 
              id={item.type} 
              value={item.type} 
            />
          }
          <label htmlFor={item.type} >{item.type}</label>
        </GamesBtnContainer>
      )}
    </>
  )
}

export default GamesBtn