import { Link } from 'react-router-dom';

import ArrowLeftBlack from "../../assets/arrow-left-black.svg";
import ArrowRightBlack from "../../assets/arrow-right-black.svg";

import { GridFormContainer } from './styles'

interface IIntroGridFormProps {
  name: string,
  to: string,
  textLink: string,
  children?: JSX.Element
}

const IntroGridForm = (props: IIntroGridFormProps) => {
  return (
    <GridFormContainer>
      <h3>{props.name}</h3>
      {props.children}
      <Link className="link" to={props.to}>
        {props.textLink === "Back" && <img src={ ArrowLeftBlack} alt="" />}
        {props.textLink}
        {props.textLink !== "Back" && <img src={ ArrowRightBlack} alt="" />}
      </Link>
  </GridFormContainer>
  )
}

export default IntroGridForm