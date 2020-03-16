import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const PageLayout = styled('div')({
  borderTop: `3px solid ${theme.PRIMARY_COLOR}`,
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
