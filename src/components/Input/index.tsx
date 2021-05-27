import React from 'react'
import { isEmail } from '../../utils/validations'

import { InputContainer } from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
}

const Input = (props: InputProps) => {
  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState('')

  function handleValidation() {
    if (isEmail(email) === false) {
      setError('Coloque um Email válido')
    }
  }

  return (
    <>
      <InputContainer 
        type={props.type} 
        placeholder={props.placeholder}
        onChange={(e: any) => props.type === 'email' && setEmail(e.target.value)}
        onBlur={handleValidation}
        onFocus={() => setError('')}
      />
      <p style={{fontSize: '12px', color: 'red', margin: '-26px 10px 0 auto'}}>{props.type === 'email' && error}</p>
    </>
  ) 
};

export default Input;
