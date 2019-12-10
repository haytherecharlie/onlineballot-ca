import styled from 'styled-components'
import { View, Text } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
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

export const SVG = styled(Svg)({
  height: 40,
  width: 40,
  x: 0,
  y: 0
})

export const Spinner = styled(Circle)({
  cx: 20,
  cy: 20,
  r: 18,
  strokeWidth: 4,
  stroke: theme.PRIMARY_COLOR,
  fill: 'transparent',
  strokeDasharray: Math.PI * 25,
  strokeLinecap: 'round',
  [theme.MEDIA_QUERY_TABLET]: {
    stroke: 'green'
  },
  [theme.MEDIA_QUERY_DESKTOP]: {
    stroke: 'orange'
  }
})

export const LoadingText = styled(Text)({
  fontWeight: 400,
  marginTop: '10px',
  color: theme.PRIMARY_COLOR
})
