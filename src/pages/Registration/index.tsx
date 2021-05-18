import Intro from "../../components/Intro";
import Input from "../../components/Input";
import IntroGridForm from "../../components/IntroGridForm";

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

import { RegisterContainer } from "./styles";

const Registration = () => {
  return (
    <RegisterContainer>
      <Intro />
      <IntroGridForm name="Registration" to="/" textLink="Back" >
        <form>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <button type="submit">
            Register <img src={ArrowRightGreen} alt="" />
          </button>
        </form>
      </IntroGridForm>
    </RegisterContainer>
  );
};

export default Registration;
