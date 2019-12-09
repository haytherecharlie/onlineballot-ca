import { useEffect } from 'react'
import configureTheme from 'utils/configureTheme'

const useInitialization = ({ setInitialized, setDarkMode, setScreenSize }) => {
  useEffect(() => {
    runInitialization()
  }, [])

  const runInitialization = async () => {
    await Promise.all(await configureTheme(setDarkMode, setScreenSize))
    return setInitialized(true)
  }
}

export default useInitialization
