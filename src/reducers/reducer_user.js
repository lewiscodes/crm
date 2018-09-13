import { SET_LOGGED_IN } from '../actions/user'

const INITIAL_STATE = { loggedIn: false }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {...state, loggedIn: action.payload}
    default:
      return state
  }
}
