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

export const Title = styled(Text)({
  fontSize: 20,
  color: theme.PRIMARY_COLOR
})
