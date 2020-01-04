import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { TouchableOpacity, ScrollView, View, Text } from 'react-native'

export const Wrapper = styled(ScrollView)({
  background: theme.BACKGROUND_COLOR,
  flex: 1,
  display: 'flex',
  padding: `20px 10px`
})

export const Box = styled(View)({
  paddingBottom: 20,
  width: `100%`,
  marginBottom: 30
})

export const Title = styled(Text)({
  fontSize: 20,
  textAlign: 'center',
  fontFamily: 'habichat',
  color: theme.PRIMARY_COLOR
})

export const Description = styled(Text)({
  fontSize: 14,
  textAlign: 'center',
  color: `#999`,
  marginBottom: 10
})

export const Button = styled(TouchableOpacity)({
  marginTop: 30,
  padding: `10px 20px`,
  background: theme.HIGHLIGHT_COLOR,
  border: `1px solid rgba(141, 53, 240, 0.05)`,
  borderRadius: 20,
  width: `80%`,
  maxWidth: `400px`,
  margin: 'auto'
})

export const ButtonText = styled(Text)({
  fontSize: 16,
  textAlign: 'center',
  fontWeight: 600,
  color: `#fff`
})
