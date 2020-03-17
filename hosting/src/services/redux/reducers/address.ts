import * as A from '../actions'

const dState = null

const reducer = (state = dState, action) => {
  switch (action.type) {
    case A.SET_ADDRESS:
      return action.value
    default:
      return state
  }
}

export default reducer
