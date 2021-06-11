import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { clearInput } from "../../utils/clearInput";

import Intro from "../../components/Intro";
import Input from "../../components/Input";
import IntroGridForm from "../../components/IntroGridForm";

import api from '../../services/api'

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

const Login = () => {
  const dispatch = useDispatch()

  async function handleAuthetication(event: { preventDefault?: any; target: any; }) {
    event.preventDefault()

    const userLogin = {
      email: event.target[0].value,
      password: event.target[1].value,
    }

    await api.post('/sessions', userLogin)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: 'USER_AUTH',
            payload: response.data
          })    
        }
      })
      .catch((error) => {
        alert('E-mail ou senha inválidos!')
        clearInput(event)
        console.log(error);
      })
  }

  return (
    <Intro>
      <IntroGridForm name="Authentication" to="/registration" textLink="Sign Up" >
        <form onSubmit={handleAuthetication}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Link to="/forgot-password">I forget my password</Link>
          <button type="submit">
            Log In <img src={ArrowRightGreen} alt="" />
          </button>
        </form>
      </IntroGridForm>
    </Intro>
  );
};

export default Login;
