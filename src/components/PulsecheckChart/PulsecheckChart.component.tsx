import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { LineChart, BarChart } from 'react-native-chart-kit'
import theme from 'assets/styles/theme.style'
import * as S from './PulsecheckChart.style'

const PulsecheckChart = ({ chart, type }) => {
  const screenWidth = Math.min(Dimensions.get('window').width - 40, 700)
  const rawData = { data: [4, 7, 9, 6, 7, 9] }
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [rawData],
    fromZero: true
  }

  const renderChart = () => {
    switch (chart) {
      case 'line':
        return (
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={S.chartConfig(type)}
            style={S.lineChartStyle}
            fromZero={true}
          />
        )
      case 'bar':
        return (
          <BarChart
            fromZero={true}
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={S.chartConfig(type)}
            hideLegend="{false}"
            style={S.lineChartStyle}
          />
        )
      default:
        return (
          <LineChart fromZero={true} bezier data={data} width={screenWidth} height={220} chartConfig={S.chartConfig(type)} style={S.lineChartStyle} />
        )
    }
  }

  const renderTitle = () => {
    switch (type) {
      case 'job':
        return 'Job Satisfaction'
      case 'manager':
        return 'Manager Approval'
      case 'team':
        return 'Team Rating'
      case 'performance':
        return 'My Performance'
    }
  }

  return (
    <S.Wrapper>
      <S.Title>{renderTitle()}</S.Title>
      {renderChart()}
    </S.Wrapper>
  )
}

export default PulsecheckChart
