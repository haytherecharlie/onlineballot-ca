export const INITIALIZE_APP = 'INITIALIZE_APP'

const defaultState = {
  initialized: false
}

export const universalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return { ...state, initialized: true }
    default:
      return state
  }
}
