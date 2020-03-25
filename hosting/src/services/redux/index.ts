import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import application from './reducers/application'
import address from './reducers/address'
import ballot from './reducers/ballot'

const reducer = combineReducers({ application, address, ballot })

export default preloadedState => createStore(reducer, preloadedState, composeWithDevTools())
