import Intro from "../../components/Intro";
import Input from "../../components/Input";
import IntroGridForm from "../../components/IntroGridForm";

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

const Registration = () => {
  return (
    <Intro>
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
    </Intro>
  );
};

export default Registration;
