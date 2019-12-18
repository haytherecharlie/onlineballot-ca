import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { View, Image } from 'react-native'

export const Wrapper = styled(View)({
  height: `64px`,
  width: `100%`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.HEADER_COLOR
})

export const Logo = styled(Image)({
  height: 20,
  width: 150
})
