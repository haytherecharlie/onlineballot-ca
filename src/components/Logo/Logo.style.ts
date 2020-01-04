import styled from 'styled-components'
import { View, Image } from 'react-native'

export const Wrapper = styled(View)({
  flex: 1,
  display: `flex`,
  alignItems: 'center',
  justifyContent: 'center'
})

export const Logo = styled(Image)({
  height: 22,
  width: 150
})
