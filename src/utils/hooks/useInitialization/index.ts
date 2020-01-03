import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { INITIALIZE_APP } from 'services/redux'

const useInitialization = () => {
  const dispatch = useDispatch()
  const runInitialization = () => {
    dispatch({ type: INITIALIZE_APP })
  }

  useEffect(() => {
    runInitialization()
  }, [])
}

export default useInitialization
