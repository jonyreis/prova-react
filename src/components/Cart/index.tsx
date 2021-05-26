import convertToCurrency from '../../utils/convertToCurrency'

import ArrowRightGreenDark from '../../assets/arrow-right-green-dark.svg'
import Trash from '../../assets/trash.svg'


import { CartContainer } from './styles'

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
  return (
    <CartContainer>
      <h3>CART</h3>
      <div data-js="bets" className="bets">
        {listBet.map((item, index: number) => 
          <div data-js="bet" className="bet" key={item.key}>
            <button type="button" onClick={() => onHandleDeleteBet(index)}>
              <img src={Trash} alt="trash" />
            </button>
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
          <span>Cart</span> Total: {convertToCurrency(onHandleTotalPrice())}
        </h2>
      </div>
      <div className="save">
        <button type="button" onClick={() => onHandleSave()}>Save <img src={ArrowRightGreenDark} alt="arrow-right" /></button>
      </div>
    </CartContainer>
  )
}

export default Cart
