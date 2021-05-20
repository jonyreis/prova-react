import React from 'react'

import Header from "../../components/Header"
import GamesBtn from "../../components/GamesBtn"

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
              <div 
                className="number"
                key={index + 1}
                onClick={(e) => handleSelectNumber(e)}
              >
                {String(index + 1).padStart(2, '0')}
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