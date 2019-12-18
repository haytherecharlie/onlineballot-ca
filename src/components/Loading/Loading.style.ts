import styled from 'styled-components'
import { View, Text } from 'react-native'
import theme from 'assets/styles/theme.style'

export const ChildWrapper = styled(View)({
  minHeight: typeof document === 'object' ? `calc(100vh - 66px)` : '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
