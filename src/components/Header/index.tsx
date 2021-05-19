import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { HeaderContainer } from './styles';

import ArrowRightBlack from '../../assets/arrow-right-black.svg'

const Header = () => {
  const dispatch = useDispatch()
  
  function handleLogout() {
    dispatch({
      type: 'LOGOUT',
      payload: {
        name: '',
        password: ''
      }
    })
  }

  return (
    <HeaderContainer>
      <div className="container">
        <h1>TGL</h1>
        <ul>
          <li><Link to="#">Account</Link></li>
          <li><Link to="/" onClick={handleLogout}>Sair <img src={ArrowRightBlack} alt="" /></Link></li>
        </ul>
      </div>
    </HeaderContainer>
  )
}

export default Header