import { InputContainer } from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
}

const Input = (props: InputProps) => {
  return <InputContainer type={props.type} placeholder={props.placeholder} />;
};

export default Input;
