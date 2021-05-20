
import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import gamesReducer from './games/reducer'
import usersReducer from './users/reducer'

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  games: gamesReducer
})