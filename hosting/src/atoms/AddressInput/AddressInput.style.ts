import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const AddressInput = styled('div')({
  position: 'relative',
  display: 'block',
  width: `100%`
})

export const Input = styled('input')({
  boxSizing: 'border-box',
  margin: `10px auto`,
  width: `100%`,
  padding: `10px 15px 8px 15px`,
  border: `1px solid ${theme.PRIMARY_COLOR}`,
  borderRadius: 25,
  color: theme.DEFAULT_COLOR,
  textAlign: 'center',
  background: `rgba(141, 53, 240, 0.05)`,
  '&::placeholder': {
    color: '#777'
  },
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 3px blue`
  }
})
