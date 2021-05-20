
import { useSelector, RootStateOrAny } from 'react-redux'

import { GamesBtnContainer } from './styles'

const GamesBtn = () => {
  const { games } = useSelector((state: RootStateOrAny) => state)

  return (
    <>
      {games.map((item: { type: string, color: string }) => 
        <GamesBtnContainer color={item.color} key={item.color}>
          <input type="radio" name="game" id={item.type} value={item.type} />
          <label htmlFor={item.type} >{item.type}</label>
        </GamesBtnContainer>
      )}
    </>
  )
}

export default GamesBtn