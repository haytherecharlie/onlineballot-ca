import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { View, Image, Text } from 'react-native'

export const Wrapper = styled(View)({
  height: `64px`,
  width: `100%`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `0px 20px`,
  backgroundColor: theme.HEADER_COLOR
})

export const Logo = styled(Image)({
  height: 20,
  width: 150
})

export const Menu = styled(Text)({
  fontSize: 30,
  color: theme.MENU_ICON_COLOR,
  paddingTop: 5
})

export const Profile = styled(View)({
  height: 25,
  width: 25,
  borderRadius: `15px`,
  background: `rgba(0,0,0,0.5)`
})
