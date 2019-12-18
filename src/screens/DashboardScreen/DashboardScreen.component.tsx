import React from 'react'
import { TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Loading from 'components/Loading'
import theme from 'assets/styles/theme.style'
import * as S from './DashboardScreen.style'

const DashboardScreen = ({ navigation }) => {
  return (
    <Loading loading={false}>
      <TouchableOpacity onPress={() => navigation.navigate('VacationScreen')}>
        <S.Title>DashboardScreen</S.Title>
      </TouchableOpacity>
    </Loading>
  )
}

DashboardScreen.navigationOptions = {
  title: 'My Dashboard'
}

export default withNavigation(DashboardScreen)
