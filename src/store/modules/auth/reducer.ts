import { Reducer } from 'redux'
import { IUserAuth } from './types'

const INITIAL_STATE: IUserAuth = {
  refreshToken: null,
  token: '',
  type: ''
}

const userAuth: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_AUTH': {
      return action.payload
    }
    case 'LOGOUT': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default userAuth