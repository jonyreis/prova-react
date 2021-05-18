import { Reducer } from 'redux'
import { IUser } from './types'

const INITIAL_STATE: Array<IUser> = []

const users: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return action.payload
    }
    case 'REMOVE_USER': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default users