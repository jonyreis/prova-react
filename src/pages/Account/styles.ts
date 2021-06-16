import styled from 'styled-components'

export const AccountContainer = styled.div`
  background-color: #f7f7f7;

  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  height: calc(100vh - 160px);
  width: 100%;
  @media (max-width: 900px) {
    min-height: 100vh;
  }
  h3 {
    color: #707070;
    font-size: 35px;
    font-style: italic;
    font-weight: bold;
    text-align: center;
  }
  form {
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 14px;

    display: grid;
    grid-template-columns: 1fr;

    width: 350px;
    @media (max-width: 400px) {
      width: 340px;
    }
    @media (max-width: 330px) {
      width: 310px;
    }
    a {
      color: #c1c1c1;
      font-size: 17px;
      font-style: italic;
      text-align: right;
      margin: 7px 27px 0 0;
      text-decoration: none;
    }
    button {
      background-color: transparent;
      border: none;
      color: #b5c401;
      font-style: italic;
      font-weight: bold;
      font-size: 35px;
      padding: 4px;
      margin: 32px 0;
      cursor: pointer;
      outline: none;
    }
  }
`