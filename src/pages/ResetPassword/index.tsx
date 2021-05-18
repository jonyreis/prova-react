import Intro from "../../components/Intro";
import Input from "../../components/Input";
import IntroGridForm from "../../components/IntroGridForm";

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

const ResetPassword = () => {
  return (
    <Intro>
      <IntroGridForm name="Reset Password" to="/" textLink="Back">
        <form>
          <Input type="email" placeholder="Email" />
          <button type="submit">
            Send link <img src={ArrowRightGreen} alt="" />
          </button>
        </form>
      </IntroGridForm>
    </Intro>
  );
};

export default ResetPassword;
