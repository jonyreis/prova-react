/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getDate } from '../../utils/getDate'

import Header from "../../components/Header"
import GamesBtn from "../../components/GamesBtn"
import ButtonNumber from '../../components/ButtonNumber'
import Cart from '../../components/Cart'

import { IGames } from '../../store/modules/games/types'

import ShoppingCart from '../../assets/shopping-cart.svg'

import { 
  NewBetContainer, 
  Main,
  IntroNewBet,
  ChooseAGame, 
  DescriptionGame, 
  NumbersContainer, 
  ActionButtonsContainer, 
  EmptyButtons, 
  CartButton, 
  ActionButtonsMobileContainer
} from './styles'

interface IListBetProps {
  numbers: Array<number>
  type: string
  color: string
  price: number
  key: string
}

const NewBet = () => {
  const [arraySelectedNumbers, setArraySelectedNumbers] = React.useState<number[]>([])
  const [listBet, setListBet] = React.useState<Array<IListBetProps>>([])
  const [selectedGame, setSelectedGame] = React.useState<IGames>({
    type: '', 
    color: '', 
    description: '',
    maxNumber: 0,
    minCartValue: 0,
    price: 0,
    range: 0
  })

  const { cart } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()
  const history = useHistory()
  const $buttonNumber = document.querySelectorAll('[data-js="button-number"]')

  React.useEffect(() => {
    handleClearGame()
  }, [selectedGame])

  function handleClearGame() {
    setArraySelectedNumbers(prevState => prevState = [])

    $buttonNumber.forEach(item => {
      item.setAttribute('style', `${{background: '#adc0c4'}}`)
    })
  }

  function handleCompleteGame() {
    let randomNumber: number;

    $buttonNumber.forEach(item => {
      item.setAttribute('style', `${{background: '#adc0c4'}}`)
    })

    if (arraySelectedNumbers.length >= selectedGame.maxNumber) {
      arraySelectedNumbers.splice(0, arraySelectedNumbers.length)
    }

    while (arraySelectedNumbers.length < selectedGame.maxNumber) {
      randomNumber = Math.ceil(Math.random() * selectedGame.range)

      if (arraySelectedNumbers.indexOf(randomNumber) === -1) {
        arraySelectedNumbers.push(randomNumber)
        setArraySelectedNumbers(prevState => [...prevState])
      }
    }
  }

  function handleAddToCart() {
    if (arraySelectedNumbers.length > 0 && arraySelectedNumbers.length === selectedGame.maxNumber) {
      setListBet(prevState => [...prevState, {
        numbers: [...arraySelectedNumbers].sort(handleCompareNumbers),
        type: selectedGame.type,
        color: selectedGame.color,
        price: selectedGame.price,
        date: getDate(),
        key: `${selectedGame.type}-${new Date().getTime()}`
      }])
      handleClearGame()
    } else {
      alert(`A ${selectedGame.type} deve ter ${selectedGame.maxNumber} números selecionados`) 
    }
  }

  function handleCompareNumbers(a: number, b: number) {
    return a - b;
  }

  function handleDeleteBet(indexArray: number) {
    let newArray = listBet
    newArray.splice(indexArray, 1)
    
    setListBet([...newArray])
  }

  function handleTotalPrice() {
    const totalPrice = listBet.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)

    return totalPrice
  }

  function handleSave() {
    if (handleTotalPrice() >= 30) {
      dispatch({
        type: 'SAVE_BETS',
        payload: listBet
      })
      history.push('/home')
    } else {
      alert('Para salvar os jogos o total deve ser de pelo menos R$ 30,00')
    }
  }

  return (
    <NewBetContainer>
      <Header />
      <Main>
        <section>
          <IntroNewBet>
            <h2>
              <span>New bet</span> for {selectedGame.type}
            </h2>
            <ChooseAGame className="choose-a-game">Choose a game</ChooseAGame>
            <ul>
              <GamesBtn setSelectedGame={setSelectedGame} />
            </ul>
            <DescriptionGame>
              <h4>Fill your bet</h4>
              <p>{selectedGame.description}</p>
            </DescriptionGame>
            {selectedGame.type !== '' &&
            <ActionButtonsMobileContainer>
              <button
                className="empty-buttons"
                type="button" 
                onClick={() => handleCompleteGame()}>Complete Game
              </button>
              <button
                className="empty-buttons"
                type="button" 
                onClick={() => handleClearGame()}>Clear Game
              </button>
              <CartButton type="button" onClick={() => handleAddToCart()}>
                <img src={ShoppingCart} alt="" />
                <span>Add to cart</span>
              </CartButton>
            </ActionButtonsMobileContainer>
          }
          </IntroNewBet>
          <NumbersContainer cartMobile={cart}>
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
          </NumbersContainer>
          <ActionButtonsContainer>
            <EmptyButtons>
              <button 
                type="button" 
                onClick={() => handleCompleteGame()}>Complete Game
              </button>
              <button 
                type="button" 
                onClick={() => handleClearGame()}>Clear Game
              </button>
            </EmptyButtons>
            <CartButton type="button" onClick={() => handleAddToCart()}>
              <img src={ShoppingCart} alt="" />
              <span>Add to cart</span>
            </CartButton>
          </ActionButtonsContainer>
        </section>
        <Cart 
          listBet={listBet}
          onHandleDeleteBet={handleDeleteBet}
          onHandleTotalPrice={handleTotalPrice}
          onHandleSave={handleSave}
        />
      </Main>
    </NewBetContainer>
  )
}

export default NewBet