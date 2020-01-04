import styled from 'styled-components'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import theme from 'assets/styles/theme.style'

export const Wrapper = styled(View)({
  background: theme.BACKGROUND_COLOR,
  height: (p) => (p.isWeb ? `calc(100vh - 66px)` : `100%`),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  overflow: 'hidden'
})

export const Button = styled(TouchableOpacity)({
  background: theme.HIGHLIGHT_COLOR,
  height: 60,
  width: 60,
  position: 'absolute',
  bottom: Platform.OS === 'android' ? 120 : 30,
  right: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
  boxShadow: `2px 2px 2px rgba(0,0,0,0.4)`,
  zIndex: 300,
  elevation: 2
})

export const Icon = styled(Ionicon)({})

export const Title = styled(Text)({
  fontSize: 20,
  color: theme.PRIMARY_COLOR
})
