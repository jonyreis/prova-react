import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import Intro from "../../components/Intro";
import Input from "../../components/Input";
import IntroGridForm from "../../components/IntroGridForm";

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

import { useSelector, RootStateOrAny } from 'react-redux'
import { clearInput } from "../../utils/clearInput";

const Login = () => {
  const { users } = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()


  function handleAuthetication(event: { preventDefault?: any; target: any; }) {
    event.preventDefault()

    const userLogin = {
      email: event.target[0].value,
      password: event.target[1].value,
    }

    const userAuthenticate = users.filter((user: { email: string, password: string }) => {
      if (user.email === userLogin.email && user.password === userLogin.password) {
        return { user }
      }
    })

    dispatch({
      type: 'USER_AUTH',
      payload: userAuthenticate
    })

    clearInput(event)
  }
  return (
    <Intro>
      <IntroGridForm name="Authentication" to="/registration" textLink="Sign Up" >
        <form onSubmit={handleAuthetication}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Link to="/reset-password">I forget my password</Link>
          <button type="submit">
            Log In <img src={ArrowRightGreen} alt="" />
          </button>
        </form>
      </IntroGridForm>
    </Intro>
  );
};

export default Login;
