
import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import { IGames } from '../../store/modules/games/types'

import { GamesBtnContainer } from './styles'

interface IGamesBtnProps {
  setSelectedGame: React.Dispatch<React.SetStateAction<IGames>>
}

const GamesBtn = ({ setSelectedGame }: IGamesBtnProps) => {
  const { games } = useSelector((state: RootStateOrAny) => state)

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
          <input onClick={() => setSelectedGame(item)} type="radio" name="game" id={item.type} value={item.type} />
          <label htmlFor={item.type} >{item.type}</label>
        </GamesBtnContainer>
      )}
    </>
  )
}

export default GamesBtn