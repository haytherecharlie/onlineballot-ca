import { createStore, combineReducers } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'

export const INITIALIZE_APP = 'INITIALIZE_APP'
export const TOGGLE_AUTH = 'TOGGLE_AUTH'

const defaultState = {
  universal: {
    initialized: false
  },
  user: {
    authenticated: false,
    data: {
      email: 'charlie.hay@telus.com',
      name: 'Charlie Hay',
      photo: 'https://avatars1.githubusercontent.com/u/43853551?s=460&v=4',
      team: 'Spacejam'
    }
  }
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return { ...state, universal: { ...state.universal, initialized: true } }
    case TOGGLE_AUTH:
      return { ...state, user: { authenticated: action.status, data: action.value } }
    default:
      return state
  }
}

export default __DEV__ ? createStore(reducer, devToolsEnhancer()) : createStore(reducer)
