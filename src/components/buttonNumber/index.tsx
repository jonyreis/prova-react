import { ButtonNumberContainer } from './styles'

interface IButtonNumberProps {
  value: number,
  selected: boolean,
  selectedGame: any,
  arraySelectedNumbers?: any,
  setArraySelectedNumbers?: any
}

const ButtonNumber = (props: IButtonNumberProps) => {
  function handleSelectNumber(btnNumber: any) {
    const num = Number(btnNumber.currentTarget.textContent)

    if (props.arraySelectedNumbers.indexOf(num) === -1 && props.arraySelectedNumbers.length < 6) {
      btnNumber.currentTarget.style.background = '#27c383'
      props.arraySelectedNumbers.push(num)
    } else if (props.arraySelectedNumbers.indexOf(num) !== -1) {
      btnNumber.currentTarget.style.background = '#adc0c4'
      const indexSelect = props.arraySelectedNumbers.indexOf(num)
      props.arraySelectedNumbers.splice(indexSelect, 1)
    } else {
      alert(`A ${props.selectedGame.type} pode ter até ${props.selectedGame.maxNumber} números selecionados`)
    }
  }

  return (
    <ButtonNumberContainer
      className="number"
      selected={props.selected}
      id={`number-${props.value}`}
      onClick={(e) => handleSelectNumber(e)}
      data-js="button-number"
    >
    {String(props.value).padStart(2, '0')}
    </ButtonNumberContainer>
  )

}

export default ButtonNumber
