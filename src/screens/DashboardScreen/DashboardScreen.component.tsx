import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Loading from 'components/Loading'
import PulsecheckChart from 'components/PulsecheckChart'
import theme from 'assets/styles/theme.style'
import * as S from './DashboardScreen.style'

const DashboardScreen = ({ navigation }) => {
  return (
    <Loading loading={false}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PulsecheckChart chart="line" type="manager" />
        <PulsecheckChart chart="bar" type="job" />
        <PulsecheckChart chart="bezier" type="performance" />
        <PulsecheckChart chart="bar" type="team" />
      </ScrollView>
    </Loading>
  )
}

DashboardScreen.navigationOptions = {
  title: 'My Dashboard'
}

export default withNavigation(DashboardScreen)
