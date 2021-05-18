import { IntroContainer, GridLeft, GridRight } from "./styles";

interface IIntroProps {
  children?: JSX.Element
}

const Intro = (props: IIntroProps) => {
  return (
    <IntroContainer>
      <GridLeft>
        <h1 className="the-geatest">The Geatest App</h1>
        <span>for</span>
        <h1 className="lottery">LOTTERY</h1>
      </GridLeft>
      <GridRight>
        {props.children}
      </GridRight>
    </IntroContainer>
  );
};

export default Intro;
