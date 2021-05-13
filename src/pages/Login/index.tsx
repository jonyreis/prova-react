import { Link } from "react-router-dom";

import Intro from "../../components/Intro";
import Input from "../../components/Input";

import ArrowRight from "../../assets/arrow-right.svg";

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
            Log In <img src={ArrowRight} alt="" />
          </button>
        </form>
      </div>
    </LoginContainer>
  );
};

export default Login;
