import * as A from '../actions'

const dState = {
  darkMode: false,
  dimensions: 'desktop',
  keyboard: false,
  intialized: false,
  language: 'en',
  modal: '',
  nav: false
}

const reducer = (state = dState, action) => {
  switch (action.type) {
    case A.INITIALIZE:
      return state

    case A.SET_DIMENSIONS:
      return { ...state, dimensions: action.value }

    case A.TOGGLE_DARK_MODE:
      return { ...state, darkMode: action.status }

    case A.TOGGLE_KEYBOARD:
      return { ...state, keyboard: action.status }

    case A.TOGGLE_MODAL:
      return { ...state, modal: action.value || '', modalSlide: 0 }

    case A.TOGGLE_NAV:
      return { ...state, nav: !state.nav }

    default:
      return state
  }
}

export default reducer
