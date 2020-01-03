import React, { useEffect } from 'react'
import * as Font from 'expo-font'
import habichat from 'assets/fonts/habichat.otf'
import { useDispatch } from 'react-redux'
import { INITIALIZE_APP } from 'services/redux'

const useInitialization = () => {
  const dispatch = useDispatch()

  const runInitialization = async () => {
    await Font.loadAsync({ habichat })
    dispatch({ type: INITIALIZE_APP })
  }

  useEffect(() => {
    console.disableYellowBox = true
    runInitialization()
  }, [])
}

export default useInitialization
