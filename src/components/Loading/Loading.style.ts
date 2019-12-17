import styled from 'styled-components'
import { View, Text } from 'react-native'
import theme from 'assets/styles/theme.style'

export const ChildWrapper = styled(View)({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  background: theme.BACKGROUND_COLOR
})

export const LoadingWrapper = styled(View)({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.BACKGROUND_COLOR
})

export const LoadingText = styled(Text)({
  fontWeight: 400,
  marginTop: '10px',
  color: theme.PRIMARY_COLOR
})
