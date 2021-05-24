import ArrowRightGreenDark from '../../assets/arrow-right-green-dark.svg'

import { CartContainer } from './styles'

interface ICartProps {
}

const Cart = (props: ICartProps) => {

  console.log(props.gamesAddToCart)
  return (
    <CartContainer>
      <h3>CART</h3>
      <div data-js="bets" className="bets">
        <div data-js="bet" className="bet">
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