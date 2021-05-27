import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  background-color: #F7F7F7;
  border-bottom: 2px solid #EBEBEB;
  color: #707070;
`

export const Container = styled.div`
  font-weight: 700;
  font-style: italic;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  max-width: 1040px;
  height: 75.5px;
  margin: 0 auto;
  @media (max-width: 1040px) {
    padding: 0 32px;
  }
`

export const LogoHome = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  h1 {
    font-size: 44px;
    font-weight: 700;
    line-height: 0px;
    margin-top: 48px;
    &:after {
      content: '';
      display: block;
      width: 107px;
      height: 7px;

      background-color: #B5C401;
      border-radius: 3px;
      
      margin-top: 29px;
      margin-left: -8px;
    }
  }
`

export const LinkHome = styled(Link)`
  color: #707070;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  @media (max-width: 900px) {
    display: none;
  }
`

export const LinkContainerDesktop = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 200px;
  @media (max-width: 900px) {
    display: none;
  }
  a {
    color: #707070;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    img {
      margin-left: 8px;
    }
  }
`

export const LinkContainerMobile = styled.ul`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-around;
    width: 90px;
    button {
      border: none;
      background-color: transparent;
      padding: 4px;
    }
  }
`