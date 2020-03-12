import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const PageLayout = styled('div')({
  flex: 1,
  width: '100vw',
  minHeight: `100vh`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.BACKGROUND_COLOR,
  padding: 20
})
