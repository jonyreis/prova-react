import styled from 'styled-components'

type GamesBtnContainerProps = {
  color: string;
};
  
export const GamesBtnContainer = styled.li<GamesBtnContainerProps>`
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