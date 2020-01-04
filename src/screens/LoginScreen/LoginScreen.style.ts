import styled from 'styled-components'
import { KeyboardAvoidingView, TouchableOpacity, TextInput, Image, Text } from 'react-native'
import theme from 'assets/styles/theme.style'

export const Wrapper = styled(KeyboardAvoidingView)({
  height: `100%`,
  width: `100%`,
  background: theme.BACKGROUND_COLOR,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Logo = styled(Image)({
  height: 35,
  width: 250,
  marginBottom: 20
})

export const Input = styled(TextInput)({
  marginTop: 10,
  width: `80%`,
  maxWidth: `400px`,
  padding: '10px 20px',
  border: `1px solid ${theme.HIGHLIGHT_COLOR}`,
  borderRadius: 25,
  textAlign: 'center',
  background: `rgba(141, 53, 240, 0.05)`,
  [`:focus`]: {
    outline: `none`
  }
})

export const InputLabel = styled(Text)({
  color: theme.HIGHLIGHT_COLOR
})

export const Button = styled(TouchableOpacity)({
  marginTop: 30,
  padding: `10px 20px`,
  background: theme.HIGHLIGHT_COLOR,
  border: `1px solid rgba(141, 53, 240, 0.05)`,
  borderRadius: 20,
  width: `80%`,
  maxWidth: `400px`
})

export const Title = styled(Text)({
  fontSize: 16,
  textAlign: 'center',
  fontWeight: 600,
  color: `#fff`
})
