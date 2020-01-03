import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { useSelector } from 'react-redux'
import useChartData from 'utils/hooks/useChartData'
import Loading from 'components/Loading'
import PulsecheckChart from 'components/PulsecheckChart'
import Spacer from 'components/Spacer'
import theme from 'assets/styles/theme.style'
import * as S from './DashboardScreen.style'

const DashboardScreen = ({ navigation }) => {
  const { jobSatisfaction, managerApproval, myPerformance, teamRating } = useSelector((s) => s.chartData)
  useChartData()

  return (
    <Loading loading={false}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PulsecheckChart chart="line" type="manager" data={managerApproval} />
        <PulsecheckChart chart="bar" type="job" data={jobSatisfaction} />
        <PulsecheckChart chart="bezier" type="performance" data={myPerformance} />
        <PulsecheckChart chart="bar" type="team" data={teamRating} />
        <Spacer />
      </ScrollView>
    </Loading>
  )
}

DashboardScreen.navigationOptions = {
  title: 'My Dashboard'
}

export default withNavigation(DashboardScreen)
