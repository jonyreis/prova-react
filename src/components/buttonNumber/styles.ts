import styled from 'styled-components'

interface IButtonNumberContainerProps {
  selected: boolean
}

export const ButtonNumberContainer = styled.button<IButtonNumberContainerProps>`
  background-color: ${props => props.selected ? '#27c383' : '#adc0c4'};
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 65px;
  height: 65px;
  cursor: pointer;
`