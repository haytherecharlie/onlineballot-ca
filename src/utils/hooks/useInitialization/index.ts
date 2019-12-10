import { useEffect } from 'react'
import store from 'services/redux'
import { INITIALIZE_APP } from 'services/redux/universal'

const useInitialization = () => {
  const runInitialization = () => {
    store.dispatch({ type: INITIALIZE_APP })
  }

  useEffect(() => {
    runInitialization()
  }, [])
}

export default useInitialization
