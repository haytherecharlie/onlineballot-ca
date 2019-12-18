import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { View, Text } from 'react-native'

export const Wrapper = styled(View)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  margin: `20px 0`
})

export const Title = styled(Text)({
  fontSize: 20,
  color: theme.PRIMARY_COLOR,
  fontWeight: 900,
  margin: 10
})

export const chartConfig = (type) => ({
  backgroundGradientFrom: `transparent`,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: `transparent`,
  backgroundGradientToOpacity: 0,
  fillShadowGradient: `#8D35F0`,
  fillShadowGradientOpacity: 0.1,
  color: (opacity = 1) => `#8D35F0`,
  strokeWidth: 2,
  barPercentage: 0.8,
  labelColor: (opacity = 1) => theme.PRIMARY_COLOR,
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#66CC00',
    fill: `#FFF`
  },
  propsForLabels: { fontFamily: 'helvetica' },
  propsForBackgroundLines: { stroke: 'transparent' }
})

export const lineChartStyle = {
  color: theme.PRIMARY_COLOR,
  marginVertical: 8,
  borderRadius: 20
}
