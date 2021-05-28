import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Container, HeaderContainer, LinkContainerDesktop, LinkContainerMobile, LinkHome, LogoHome } from './styles';

import LogOut from '../../assets/log-out.svg'
import ArrowRightBlack from '../../assets/arrow-right-black.svg'
import ShoppingCartGreen from '../../assets/shopping-cart-green.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  
  function handleLogout() {
    dispatch({
      type: 'LOGOUT',
      payload: {
        name: '',
        password: ''
      }
    })
  }

  return (
    <HeaderContainer>
      <Container>
        <LogoHome>
          <h1>TGL</h1>
          {pathname === '/new-bet' && <LinkHome to="/">Home</LinkHome>}
        </LogoHome>
        <LinkContainerDesktop>
          <li>
            <Link to="#">Account</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Sair 
              <img src={ArrowRightBlack} alt="" />
            </Link>
            </li>
        </LinkContainerDesktop>
        <LinkContainerMobile>
          {pathname === '/new-bet' && 
            <li>
              <button type="button">
                <img src={ShoppingCartGreen} alt="" />
              </button>
            </li>
          }
          <li>
            <button type="button" onClick={handleLogout}>
              <img src={LogOut} alt="" />
            </button>
          </li>
        </LinkContainerMobile>
      </Container>
    </HeaderContainer>
  )
}

export default Header