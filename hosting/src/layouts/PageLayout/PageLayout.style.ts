import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const PageLayout = styled('div')({
  flex: 1,
  minHeight: `calc(100vh - 3px)`,
  overflow: 'hidden',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.BACKGROUND_COLOR
})

export const Stripe = styled('div')({
  width: `100vw`,
  height: 3,
  position: 'fixed',
  top: 0,
  left: 0,
  background: theme.PRIMARY_COLOR
})
