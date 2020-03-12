import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import app from './reducers/app'

const reducer = combineReducers({ app })

export default (preloadedState) => createStore(reducer, preloadedState, composeWithDevTools())
