import styled from 'styled-components'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import theme from 'assets/styles/theme.style'

export const DashboardScreen = styled(View)({
  background: theme.BACKGROUND_COLOR,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start'
})

export const Button = styled(TouchableOpacity)({
  background: theme.HIGHLIGHT_COLOR,
  height: 60,
  width: 60,
  position: 'absolute',
  bottom: 30,
  right: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
  boxShadow: `2px 2px 2px rgba(0,0,0,0.4)`
})

export const Icon = styled(Ionicon)({})

export const Title = styled(Text)({
  fontSize: 20,
  color: theme.PRIMARY_COLOR
})
