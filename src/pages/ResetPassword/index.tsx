import { useLocation, useHistory } from 'react-router-dom'

import Intro from "../../components/Intro";
import Input from "../../components/Input";
import IntroGridForm from "../../components/IntroGridForm";

import ArrowRightGreen from "../../assets/arrow-right-green.svg";
import { clearInput } from "../../utils/clearInput";

import api from '../../services/api';

const ResetPassword = () => {
  const location = useLocation()
  const history = useHistory()

  let params = new URLSearchParams(location.search)
  let token = params.get('token')

  async function handleResetPassword(event: { preventDefault?: any; target: any; }) {
    event.preventDefault()

    const resetPassword = {
      password: event.target[0].value,
      password_confirmation: event.target[1].value,
      token
    }

    await api.put('/passwords', resetPassword)
      .then(() => {
        alert('Senha alterada com sucesso!')
        history.push('/')
      })
      .catch((error) => {
        alert('Senha e confirmação de senha não correspondem!')
        console.log(error);
      })

    clearInput(event)
  }

  return (
    <Intro>
      <IntroGridForm name="Reset Password" to="/" textLink="Back">
        <form onSubmit={handleResetPassword}>
          <Input type="password" placeholder="New Password" />
          <Input type="password" placeholder="Confirm New Password" />
          <button type="submit">
            Reset Password <img src={ArrowRightGreen} alt="" />
          </button>
        </form>
      </IntroGridForm>
    </Intro>
  )
}

export default ResetPassword;
