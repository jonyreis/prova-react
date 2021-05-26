
import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import betsReducer from './bets/reducer'
import gamesReducer from './games/reducer'
import usersReducer from './users/reducer'

export default combineReducers({
  auth: authReducer,
  bets: betsReducer,
  users: usersReducer,
  games: gamesReducer
})