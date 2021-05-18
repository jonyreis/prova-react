import { Reducer } from 'redux'
import { IUser } from './types'

const INITIAL_STATE: Array<IUser> = []

const users: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      INITIAL_STATE.push(action.payload)
      return [...INITIAL_STATE]
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