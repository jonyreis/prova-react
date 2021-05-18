import { Reducer } from 'redux'
import { IUserAuth } from './types'

const INITIAL_STATE: IUserAuth = {
  email: '',
  password: ''
}

const userAuth: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_AUTH': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default userAuth