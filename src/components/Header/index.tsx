import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { HeaderContainer } from './styles';

import ArrowRightBlack from '../../assets/arrow-right-black.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  
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
        <div className="logo-home">
          <h1>TGL</h1>
          {pathname === '/new-bet' && <Link to="/">Home</Link>}
        </div>
        <ul>
          <li><Link to="#">Account</Link></li>
          <li><Link to="/" onClick={handleLogout}>Sair <img src={ArrowRightBlack} alt="" /></Link></li>
        </ul>
      </div>
    </HeaderContainer>
  )
}

export default Header