import React, { useState } from 'react'
import types from 'prop-types'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import useInitialization from 'utils/hooks/useInitialization'
import Loading from 'components/Loading'
import LoginScreen from 'screens/LoginScreen'

const Router = ({ authenticated }) => {
  const [initialized, setInitialized] = useState(true)
  // useInitialization({ setInitialized })

  const AuthenticatedRouter = createAppContainer(createSwitchNavigator({ LoginScreen }, { initialRouteName: 'LoginScreen' }))

  const UnauthenticatedRouter = createAppContainer(createSwitchNavigator({ LoginScreen }, { initialRouteName: 'LoginScreen' }))

  switch (`${initialized} | ${authenticated}`) {
    case `true | true`:
      return <AuthenticatedRouter />
    case `true | false`:
      return <UnauthenticatedRouter />
    default:
      return <Loading loading={true} />
  }
}

Router.propTypes = {
  authenticated: types.oneOfType([types.bool, types.string]).isRequired,
}

export default Router
