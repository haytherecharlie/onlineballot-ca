import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const AddressSuggestions = styled('div')({
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  width: `90%`,
  margin: `auto`,
  borderRadius: 5,
  background: theme.BACKGROUND_COLOR,
  boxShadow: `0 0 5px rgba(0,0,0,0.3)`,
  padding: `5px 10px`,
  color: theme.DEFAULT_COLOR
})

export const Suggestion = styled('button')({
  zIndex: 10000,
  padding: 5,
  background: 'transparent',
  border: 'none',
  color: theme.DEFAULT_COLOR,
  fontSize: theme.FONT_SMALL,
  textAlign: 'center',
  width: `90%`,
  '&.selected': {
    background: '#999'
  }
})
