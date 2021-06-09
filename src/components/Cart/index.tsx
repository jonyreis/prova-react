import React from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import convertToCurrency from '../../utils/convertToCurrency'

import ArrowRightGreenDark from '../../assets/arrow-right-green-dark.svg'
import Trash from '../../assets/trash.svg'
import Close from '../../assets/x.svg'


import { Backdrop, CartContainer, BtnClose, Bets, Bet, ButtonnRemoveBet, Separator, BetInfo, ArrayNumbers, TypeAndPrice, Total, Save } from './styles'

interface IListBetProps {
  numbers: Array<number>
  type: string
  color: string
  price: number
  key: string
}

interface ICartProps {
  listBet: Array<IListBetProps>
  onHandleDeleteBet(indexArray: number): void
  onHandleTotalPrice(): number
  onHandleSave(): void
}

const Cart = ({ 
  listBet, 
  onHandleDeleteBet, 
  onHandleTotalPrice, 
  onHandleSave 
}: ICartProps) => {
  const { cart } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()
  
  function handleCloseCart() {
    dispatch({
      type: 'CART_OFF',
      payload: false
    })
  }

  return (
    <>
      <Backdrop onClick={handleCloseCart} isBackdrop={cart} />
      <CartContainer cartMobile={cart}>
          <h3>CART</h3>
          <BtnClose 
            type="button" 
            onClick={handleCloseCart}
          >
            <img src={Close} alt="Close Cart"/>
          </BtnClose>
          <Bets data-js="bets">
            {listBet.map((item, index: number) => 
              <Bet data-js="bet" key={item.key}>
                <ButtonnRemoveBet type="button" onClick={() => onHandleDeleteBet(index)}>
                  <img src={Trash} alt="trash" />
                </ButtonnRemoveBet>
                <Separator style={{background: item.color}}></Separator>
                <BetInfo>
                  <ArrayNumbers>
                    {item.numbers.map((number: number) => <h4 key={number}>{String(number).padStart(2, '0')}</h4>)}
                  </ArrayNumbers>
                  <TypeAndPrice>
                    <strong style={{color: item.color}}>{item.type}</strong>
                    <span>{convertToCurrency(item.price)}</span>
                  </TypeAndPrice>
                </BetInfo>
              </Bet>
            )}
          </Bets>
          <Total>
            <h2 data-js="total-price">
              <span>Cart</span> Total: {convertToCurrency(onHandleTotalPrice())}
            </h2>
          </Total>
          <Save>
            <button type="button" onClick={() => onHandleSave()}>
              Save <img src={ArrowRightGreenDark} alt="arrow-right" />
            </button>
          </Save>
      </CartContainer>
    </>
  )
}

export default Cart
