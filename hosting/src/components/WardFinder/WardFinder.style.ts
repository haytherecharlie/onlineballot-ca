import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const WardFinder = styled('div')({
  boxSizing: 'border-box',
  position: 'absolute',
  top: (p) => p.top,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  maxWidth: 600,
  width: `100%`,
  minWidth: 300,
  transition: `top .5s`
})

export const Logo = styled('img')({
  height: `auto`,
  width: 250,
  margin: `auto`,
  [theme.MEDIUM_QUERY]: {
    width: 200
  }
})

export const Divider = styled('div')({
  width: '90%',
  height: 1,
  background: theme.PRIMARY_COLOR,
  margin: `20px auto`
})

export const HiddenWrapper = styled('div')({
  display: `flex`,
  flexDirection: `column`,
  position: 'relative'
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
  opacity: 0.6,
  padding: `0 20px`,
  margin: `10px 0`
})

export const PlaceInput = styled('input')({
  position: 'absolute',
  bottom: (p) => p.bottom,
  left: `50%`,
  transform: `translateX(-50%)`,
  transition: `bottom .5s`,
  boxSizing: 'border-box',
  margin: `10px auto`,
  maxWidth: 400,
  width: `90%`,
  padding: `10px 15px 8px 15px`,
  border: `1px solid ${theme.PRIMARY_COLOR}`,
  borderRadius: 25,
  color: theme.DEFAULT_COLOR,
  background: `rgba(141, 53, 240, 0.05)`,
  '&::placeholder': {
    color: '#777'
  },
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 3px blue`
  }
})
