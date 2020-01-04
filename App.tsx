import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { View, Text, StatusBar } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import store from './src/services/redux'
import Router from './src/routes/Router'

const App = () => {
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <StatusBar />
        <Router />
      </Provider>
    </AppearanceProvider>
  )
}

export default App
