import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #F7F7F7;
  border-bottom: 2px solid #EBEBEB;
  color: #707070;
  margin-bottom: 20px;
  .container {
    font-weight: 700;
    font-style: italic;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 1040px;
    height: 75.5px;
    margin: 0 auto;
  }
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
  ul {
    display: flex;
    justify-content: space-between;
    width: 200px;
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