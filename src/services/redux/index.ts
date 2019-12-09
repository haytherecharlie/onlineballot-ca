import { createStore, combineReducers } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { applicationReducer } from './application'

// const rootReducer = combineReducers({
// application: applicationReducer
// })

export default __DEV__ ? createStore(applicationReducer, devToolsEnhancer()) : createStore(applicationReducer)
