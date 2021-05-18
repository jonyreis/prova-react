import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearInput } from '../../utils/clearInput';

import Intro from "../../components/Intro";
import Input from "../../components/Input";
import IntroGridForm from "../../components/IntroGridForm";

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

const Registration = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  
  function handleRegistration(event: { preventDefault?: any; target: any; }) {
    event.preventDefault()

    const user = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    }

    dispatch({
      type: 'ADD_USER',
      payload: user
    })
    clearInput(event)
    history.push('/')
  }


  return (
    <Intro>
      <IntroGridForm name="Registration" to="/" textLink="Back" >
        <form onSubmit={handleRegistration}>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <button type="submit">
            Register <img src={ArrowRightGreen} alt="" />
          </button>
        </form>
      </IntroGridForm>
    </Intro>
  );
};

export default Registration;
