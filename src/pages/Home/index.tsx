import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../../components/Header"

import ArrowRightGreen from "../../assets/arrow-right-green.svg";

import { HomeContainer, GamesBtn } from './styles'

const Home = () => {
  const [game, setGame] = React.useState([])

  async function getGame() {
    const response = await fetch('games.json')
    .then(res => res.json())

    setGame(response.types)
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
              {game.map((item: { type: string, color: string }) => 
                <GamesBtn color={item.color} key={item.color}>
                  <input type="radio" name="game" id={item.type} value={item.type} />
                  <label htmlFor={item.type} >{item.type}</label>
                </GamesBtn>
              )}
            </ul>
            </div>
          <Link className="btn-new-bet" to="/new-bet">New Bet <img src={ArrowRightGreen} alt="" /></Link>
        </div>
      </main>
    </HomeContainer>
  )
}

export default Home