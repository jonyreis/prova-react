import React from 'react'
import ArrowRightGreenDark from '../../assets/arrow-right-green-dark.svg'
import Trash from '../../assets/trash.svg'
import { IGames } from '../../store/modules/games/types'

import convertToCurrency from '../../utils/convertToCurrency'

import { CartContainer } from './styles'

interface ICartProps {
  arraySelectedNumbers: Array<number>
  selectedGame: IGames
  gamesAddToCart: Array<any>
}

const Cart = (props: ICartProps) => {

  console.log(props.gamesAddToCart)

  return (
    <CartContainer>
      <h3>CART</h3>
      <div data-js="bets" className="bets">
        {props.gamesAddToCart.map((item, index: any) => 
          <div data-js="bet" className="bet" key={`${index-item.color}`}>
            <img src={Trash} alt="trash" />
            <div className="separator" style={{background: item.color}}></div>
            <div className="bet-info">
              <div className="array-numbers">
                {item.numbers.map((number: number) => <h4 key={number}>{String(number).padStart(2, '0')}</h4>)}
              </div>
              <div>
                <strong style={{color: item.color}}>{item.type}</strong><span>{convertToCurrency(item.price)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="total">
        <h2 data-js="total-price">
          <span>Cart</span> Total: 0,00
        </h2>
      </div>
      <div className="save">
        <button type="button">Save <img src={ArrowRightGreenDark} alt="arrow-right" /></button>
      </div>
    </CartContainer>
  )
}

export default Cart