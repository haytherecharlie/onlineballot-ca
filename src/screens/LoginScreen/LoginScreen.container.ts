import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import LoginScreen from './LoginScreen.component'

export const state = (state) => {
  return {
    initialized: pathOr(false, ['universal', 'initialized'])(state)
  }
}

export const dispatch = {}

export default connect(state, dispatch)(LoginScreen)
