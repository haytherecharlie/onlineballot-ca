import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const PageLayout = styled('div')({
  width: '100vw',
  minHeight: `100vh`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.BACKGROUND_COLOR,
})
