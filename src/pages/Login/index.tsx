import { Link } from "react-router-dom";

import Intro from "../../components/Intro";
import Input from "../../components/Input";
import IntroGridForm from "../../components/IntroGridForm";

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

import { LoginContainer } from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <Intro />
      <IntroGridForm name="Authentication" to="/registration" textLink="Sign Up" >
        <form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Link to="/reset-password">I forget my password</Link>
          <button type="submit">
            Log In <img src={ArrowRightGreen} alt="" />
          </button>
        </form>
      </IntroGridForm>
    </LoginContainer>
  );
};

export default Login;
