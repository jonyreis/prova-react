import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from "../../components/Header"
import GamesBtn from '../../components/GamesBtn';

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

import { HomeContainer } from './styles'
import { IGames } from '../../store/modules/games/types';

const Home = () => {
  const [selectedGame, setSelectedGame] = React.useState<IGames>({
    type: '', 
    color: '', 
    description: '',
    maxNumber: 0,
    minCartValue: 0,
    price: 0,
    range: 0
  })

  const dispatch = useDispatch()

  async function getGame() {
    const response = await fetch('games.json')
    .then(res => res.json())

    dispatch({
      type: 'ADD_GAMES',
      payload: response.types
    })
  }

  React.useEffect(() => {
    getGame()
  },[])

  return (
    <HomeContainer>
      <Header />
      <main>
        <div className="filters-container">
          <div>
            <h2>Recent games</h2>
            <span>Filters: </span>
            <ul>
              <GamesBtn setSelectedGame={setSelectedGame} />
            </ul>
            </div>
          <Link className="btn-new-bet" to="/new-bet">New Bet <img src={ArrowRightGreen} alt="" /></Link>
        </div>
      </main>
    </HomeContainer>
  )
}

export default Home