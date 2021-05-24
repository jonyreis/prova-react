import React from 'react'

import Header from "../../components/Header"
import GamesBtn from "../../components/GamesBtn"
import ButtonNumber from '../../components/buttonNumber'

import { IGames } from '../../store/modules/games/types'

import ShoppingCart from '../../assets/shopping-cart.svg'

import { NewBetContainer } from './styles'


const NewBet = () => {
  const [selectNumber, setSelectNumber] = React.useState<number[]>([])
  const [selectedGame, setSelectedGame] = React.useState<IGames>({
    type: '', 
    color: '', 
    description: '',
    maxNumber: 0,
    minCartValue: 0,
    price: 0,
    range: 0
  })
    
  function handleSelectNumber(btnNumber: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const num = Number(btnNumber.currentTarget.textContent)

    if (selectNumber.indexOf(num) === -1 && selectNumber.length < 6) {
      btnNumber.currentTarget.className = 'number selected'
      setSelectNumber(prevState => [...prevState, num])
    } else if (selectNumber.indexOf(num) !== -1) {
      btnNumber.currentTarget.className = 'number'
      const indexSelect = selectNumber.indexOf(num)
      selectNumber.splice(indexSelect, 1)
    } else {
      alert(`A ${selectedGame.type} pode ter até ${selectedGame.maxNumber} números selecionados`)
    }
  }

  return (
    <NewBetContainer>
      <Header />
      <main>
        <section className="main-section">
          <h2><span>New bet</span> for {selectedGame.type}</h2>
          <strong className="choose-a-game">Choose a game</strong>
          <ul>
            <GamesBtn setSelectedGame={setSelectedGame} />
          </ul>
          <div className="description-game">
            <h4>Fill your bet</h4>
            <p>{selectedGame.description}</p>
          </div>
          <div className="numbers-container">
            {Array(selectedGame.range).fill('').map((item, index) => 
              <ButtonNumber
                value={index + 1} 
                key={index + 1}
                selected={arraySelectedNumbers.indexOf(index + 1) !== -1 ? true : false}
                selectedGame={selectedGame}
                arraySelectedNumbers={arraySelectedNumbers}
                setArraySelectedNumbers={setArraySelectedNumbers}
              />
            )}
              </div>
            )}
          </div>
        </section>
        <section className="cart-section">grid right</section>
      </main>
    </NewBetContainer>
  )
}

export default NewBet