import { Link } from "react-router-dom";

import Intro from "../../components/Intro";
import Input from "../../components/Input";

import ArrowRightBlack from "../../assets/arrow-right-black.svg";
import ArrowRightGreen from "../../assets/arrow-right-green.svg";

import { LoginContainer } from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <Intro />
      <div className="auth-container">
        <h3>Authentication</h3>
        <form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Link to="/reset-password">I forget my password</Link>
          <button type="submit">
            Log In <img src={ArrowRightGreen} alt="" />
          </button>
        </form>
        <Link className="sign-up" to="signup">Sign Up <img src={ArrowRightBlack} alt="" /></Link>
      </div>
    </LoginContainer>
  );
};

export default Login;
