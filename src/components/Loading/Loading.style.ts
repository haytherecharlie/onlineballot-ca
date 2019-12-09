import styled from 'styled-components'
import { View, Text } from 'react-native'
import { $appBackground } from 'assets/styles/app'

export const Wrapper = styled(View)({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: $appBackground
})

export const LoadingText = styled(Text)({
  fontWeight: 400,
  marginTop: '10px'
})
