import Intro from "../../components/Intro";
import Input from "../../components/Input";
import IntroGridForm from "../../components/IntroGridForm";

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

import api from '../../services/api';

const ForgotPassword = () => {
  async function handleForgotPassword(event: { preventDefault?: any; target: any; }) {
    event.preventDefault()

    const resetPassword = {
      email: event.target[0].value,
      redirect_url: 'http://localhost:3000/reset-password'
    }

    await api.post('/passwords', resetPassword)
      .then((response) => {
        if (response.status === 204) {
          alert('Enviamos um email para você!')
        }
      })
      .catch((error) => {
        console.log(error)
        alert('E-mail não cadastrado!')
      })

    event.target[0].value = ''
  }

  return (
    <Intro>
      <IntroGridForm name="Reset Password" to="/" textLink="Back">
        <form onSubmit={handleForgotPassword}>
          <Input type="email" placeholder="Email" />
          <button type="submit">
            Send link <img src={ArrowRightGreen} alt="" />
          </button>
        </form>
      </IntroGridForm>
    </Intro>
  );
};

export default ForgotPassword;
