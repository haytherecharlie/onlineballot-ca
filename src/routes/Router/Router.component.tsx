import React, { useEffect, useState } from 'react'
import types from 'prop-types'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import useInitialization from 'utils/hooks/useInitialization'
import theme from 'assets/styles/theme.style'
import Header from 'components/Header'
import Loading from 'components/Loading'
import LoginScreen from 'screens/LoginScreen'
import DashboardScreen from 'screens/DashboardScreen'
import VacationScreen from 'screens/VacationScreen'
import PulsecheckScreen from 'screens/PulsecheckScreen'

const Router = ({ authenticated, initialized }) => {
  useInitialization()

  useEffect(() => {
    if (typeof document === 'object') {
      const rootElement = document.querySelector('#root')
      rootElement.setAttribute(`style`, `background:${theme.BACKGROUND_COLOR}; border: 1px solid blue;`)
    }
  }, [])

  const AuthenticatedRouter = createAppContainer(
    createStackNavigator(
      { DashboardScreen, VacationScreen, PulsecheckScreen },
      {
        initialRouteName: 'DashboardScreen',
        defaultNavigationOptions: {
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: theme.HEADER_COLOR,
            margin: 0
          }
        }
      }
    )
  )

  const UnauthenticatedRouter = createAppContainer(createSwitchNavigator({ LoginScreen }, { initialRouteName: 'LoginScreen' }))

  switch (`${initialized} | ${authenticated}`) {
    case `true | true`:
      return <AuthenticatedRouter />
    case `true | false`:
      return <UnauthenticatedRouter />
    default:
      return <Loading />
  }
}

Router.propTypes = {
  authenticated: types.bool.isRequired,
  initialized: types.bool.isRequired
}

export default Router
