import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuMobileContainer = styled.div`
  background-color: #fff;
  border-radius: 16px 16px 0 0;
  max-width: 100vw;
  min-width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;

  @media (min-width: 901px) {
    display: none;
  }
`

export const LinkContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  li {
    margin-top: 20px;
  }
`

export const LinkRoute = styled(Link)`
  color: #707070;
  font-weight: 700;
  font-size: 14px;
  font-style: italic;
  text-decoration: none;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 24px;
  }
  .link-new-bet {
    border-radius: 50%;
    box-shadow: 2px 2px 8px #0000002E;
    min-width: 90px;
    position: absolute;
    bottom: 20px;
  }
`

export const LinkDisabled = styled.button`
  border: none;
  background-color: transparent;
  color: #C1C1C1; 
  font-weight: 400;
  font-size: 14px;
  font-style: italic;
  text-decoration: none;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  outline: none;
  img {
    max-width: 24px;
  }
`

export const LinkNewBet = styled(Link)`
  border-radius: 50%;
  box-shadow: 2px 2px 8px #0000002E;
  width: 90px;
  position: absolute;
  bottom: 20px;
`