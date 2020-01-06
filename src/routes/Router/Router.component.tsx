import React, { useEffect, useState, Fragment } from 'react'
import types from 'prop-types'
import { useDispatch } from 'react-redux'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { TOGGLE_AUTH } from 'services/redux'
import isWeb from 'utils/helpers/isWeb'
import useInitialization from 'utils/hooks/useInitialization'
import theme from 'assets/styles/theme.style'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Logo from 'components/Logo'
import Loading from 'components/Loading'
import LoginScreen from 'screens/LoginScreen'
import DashboardScreen from 'screens/DashboardScreen'
import RatingScreen from 'screens/RatingScreen'
import * as S from './Router.style'

const Router = ({ authenticated, initialized }) => {
  useInitialization()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isWeb) {
      document.querySelector('#root').setAttribute(`style`, `background:${theme.BACKGROUND_COLOR}; border: 1px solid blue;`)
      document.title = 'Telus Me | Your Personal HR Platform'
    }
  }, [])

  const AuthenticatedRouter = createAppContainer(
    createStackNavigator(
      {
        DashboardScreen: {
          screen: DashboardScreen
        },
        RatingScreen: {
          screen: RatingScreen,
          navigationOptions: {
            headerLeft: () => <Fragment />
          }
        }
      },
      {
        initialRouteName: 'RatingScreen',
        defaultNavigationOptions: {
          headerTitle: () => <Logo />,
          headerRight: () => (
            <S.Icon
              name="md-log-out"
              color={theme.HIGHLIGHT_COLOR}
              size={25}
              onPress={() => dispatch({ type: TOGGLE_AUTH, status: false, value: {} })}
            />
          ),
          headerBackTitle: 'back',
          headerTintColor: theme.HIGHLIGHT_COLOR,
          headerStyle: {
            backgroundColor: theme.HEADER_COLOR
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
