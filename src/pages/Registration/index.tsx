import { useHistory } from 'react-router-dom';

import { clearInput } from '../../utils/clearInput';

import Intro from "../../components/Intro";
import Input from "../../components/Input";
import IntroGridForm from "../../components/IntroGridForm";

import api from '../../services/api'

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

const Registration = () => {
  const history = useHistory()
  
  async function handleRegistration(event: { preventDefault?: any; target: any; }) {
    event.preventDefault()

    const user = {
      username: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    }

    await api.post('/register', user)
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        history.push('/')
      })
      .catch((error) => {
        alert('E-mail ou Nome já cadastrado!')
        console.log(error);
      })
      
    clearInput(event)
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
