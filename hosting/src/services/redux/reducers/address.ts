import * as A from '../actions'

const dState = {
  coords: {
    lat: 42.994469,
    lng: -81.2579276
  },
  ward: '6',
  streetAddress: '803 Talbot Street, London, ON, Canada'
}

const reducer = (state = dState, action) => {
  switch (action.type) {
    case A.STREET_ADDRESS:
      return { ...state, streetAddress: action.value }
    case A.FULL_ADDRESS:
      return action.value
    default:
      return state
  }
}

export default reducer
