import { createStore, combineReducers } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { universalReducer } from './universal'
import { userReducer } from './user'

const rootReducer = combineReducers({
  universal: universalReducer,
  user: userReducer
})

export default __DEV__ ? createStore(rootReducer, devToolsEnhancer()) : createStore(rootReducer)
