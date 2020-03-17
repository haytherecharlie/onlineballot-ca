import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import app from './reducers/app'
import address from './reducers/address'

const reducer = combineReducers({ app, address })

export default preloadedState => createStore(reducer, preloadedState, composeWithDevTools())
