import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #F7F7F7;
  height: calc(100vh - 79px);

  main {
    max-width: 1040px;
    margin: 0 auto;
    padding-top: 80px;
  }

  .filters-container {
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 630px;

      h2 {
        color: #707070;
        font-size: 24px;
        font-style: italic;
        text-transform: uppercase;
      }

      span {
        color: #868686;
        font-size: 17px;
        font-style: italic;
      }
    }
  }

  ul {
    display: flex;
  }

  .btn-new-bet {
    color: #B5C401;
    font-size: 24px;
    font-style: italic;
    font-weight: 700;
    text-decoration: none;

    display: flex;
    align-items: center;

    margin-left: auto;

    img {
      margin-left: 8px;
    }
  }
`

type GamesBtnProps = {
  color: string;
};

export const GamesBtn = styled.li<GamesBtnProps>`
  margin: 0 8px;
  input {
    display: none;
  }

  label {
    border-radius: 100px;
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    padding: 8px 20px;
    cursor: pointer;
  }

  input[type="radio"] + label {
    border: 2px solid ${(props) => props.color};
    color: ${(props) => props.color};
  }

  input[type="radio"]:checked + label {
    background-color: ${(props) => props.color};
    border: 2px solid ${(props) => props.color};
    color: #fff;
  }
`