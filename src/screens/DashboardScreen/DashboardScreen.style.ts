import styled from 'styled-components'
import { View, Text } from 'react-native'
import theme from 'assets/styles/theme.style'

export const DashboardScreen = styled(View)({
  background: theme.BACKGROUND_COLOR,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start'
})

export const Title = styled(Text)({
  fontSize: 20,
  color: theme.PRIMARY_COLOR
})
