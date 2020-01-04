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
  const { job_satisfaction, manager_approval, my_performance, team_rating } = useSelector((s) => s.chartData)
  useChartData()

  return (
    <Loading loading={false}>
      <S.Wrapper>
        <ScrollView showsVerticalScrollIndicator={false}>
          <PulsecheckChart chart="line" type="manager" data={manager_approval} />
          <PulsecheckChart chart="bar" type="job" data={job_satisfaction} />
          <PulsecheckChart chart="bezier" type="performance" data={my_performance} />
          <PulsecheckChart chart="bar" type="team" data={team_rating} />
          <Spacer />
        </ScrollView>
        <S.Button onPress={() => navigation.navigate('RatingScreen')}>
          <S.Icon name="md-add" color={theme.SECONDARY_COLOR} size={25} />
        </S.Button>
      </S.Wrapper>
    </Loading>
  )
}

DashboardScreen.navigationOptions = {
  title: 'My Dashboard'
}

export default withNavigation(DashboardScreen)
