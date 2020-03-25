import * as A from '../actions'

const dState = {
  screen: 'WardFinder'
}

const reducer = (state = dState, action) => {
  switch (action.type) {
    case A.NAVIGATE:
      return { ...state, screen: action.value }
    case A.STREET_ADDRESS:
      return { ...state, screen: action.screen }
    case A.FULL_ADDRESS:
      return { ...state, screen: action.screen }
    default:
      return state
  }
}

export default reducer
