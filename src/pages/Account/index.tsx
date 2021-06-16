import { useSelector, RootStateOrAny } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Header from "../../components/Header"
import Input from "../../components/Input";

import ArrowRightGreen from "../../assets/arrow-right-green.svg";
import { clearInput } from "../../utils/clearInput";

import api from '../../services/api';

import { AccountContainer } from './styles'

const Account = () => {
  const history = useHistory()
  const { auth } = useSelector((state: RootStateOrAny) => state)


  async function handleUpdate(event: { preventDefault?: any; target: any; }) {
    event.preventDefault()

    const user = {
      username: event.target[0].value,
      email: event.target[1].value,
    }

    await api.put('/register', user,
      {
        headers: { 
          "Authorization": `Bearer ${auth.token}`
        }
      })
      .then((response) => {
        alert('Dados atualizados.')
        history.push('/home')
        console.log(response)
      })
      .catch((error) => {
        alert('Não foi possível atualizar seus dados.')
        console.log(error)
      })

    clearInput(event)
  }

  return (
    <>
      <Header />
      <AccountContainer>
        <h3>Update Data</h3>
        <form onSubmit={handleUpdate}>
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="Email" />
          <button type="submit">
            Save <img src={ArrowRightGreen} alt="" />
          </button>
        </form>
      </AccountContainer>
    </>
  )
}

export default Account
