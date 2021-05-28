/* eslint-disable no-mixed-operators */
import { useLocation } from 'react-router-dom'

import Home from '../../assets/home.svg'
import User from '../../assets/user.svg'
import ButtonNewBet from '../../assets/button-new-bet.svg'

import { LinkContainer, MenuMobileContainer, LinkRoute, LinkDisabled } from './styles'


const MenuMobile = () => {
  const { pathname } = useLocation()

  return (
    <>
      {pathname === '/home' && 
        <MenuMobileContainer>
          <LinkContainer>
            <li>
              <LinkRoute to="/home"><img src={Home} alt="" />Home</LinkRoute>
            </li>
            <li>
              <LinkRoute to="/new-bet"><img className="link-new-bet" src={ButtonNewBet} alt="" /></LinkRoute>
            </li>
            <li>
              <LinkDisabled type="button" disabled><img src={User} alt="" />Account</LinkDisabled>
            </li>
          </LinkContainer>
        </MenuMobileContainer>        
      }
      {pathname === '/new-bet' && 
        <MenuMobileContainer>
          <LinkContainer>
            <li>
              <LinkRoute to="/home"><img src={Home} alt="" />Home</LinkRoute>
            </li>
            <li>
              <LinkRoute to="/new-bet"><img className="link-new-bet" src={ButtonNewBet} alt="" /></LinkRoute>
            </li>
            <li>
              <LinkDisabled type="button" disabled><img src={User} alt="" />Account</LinkDisabled>
            </li>
          </LinkContainer>
        </MenuMobileContainer>        
      }
    </>
  )
}

export default MenuMobile