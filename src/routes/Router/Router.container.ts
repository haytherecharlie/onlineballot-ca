import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import {} from 'services/redux'
import Router from './Router.component'

export const state = (state) => ({
  authenticated: pathOr(false, ['user', 'authenticated'])(state),
  initialized: pathOr(false, ['universal', 'initialized'])(state)
})

export const dispatch = {}

export default connect(state, dispatch)(Router)
