import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const WardFinder = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 600,
  width: `100%`
})

export const Logo = styled('img')({
  height: 200,
  width: `auto`,
  [theme.MEDIUM_QUERY]: {
    height: 150
  }
})

export const Divider = styled('div')({
  width: '100%',
  height: 1,
  background: theme.PRIMARY_COLOR,
  margin: 20
})

export const Title = styled('h1')({
  textAlign: 'center',
  fontSize: theme.FONT_LARGE,
  [theme.MEDIUM_QUERY]: {
    fontSize: theme.FONT_MEDIUM
  }
})

export const Paragraph = styled('p')({
  textAlign: 'center',
  fontSize: theme.FONT_SMALL,
  opacity: 0.6
})
