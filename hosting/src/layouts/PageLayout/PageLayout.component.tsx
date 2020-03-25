import React from 'react'
import GlobalStyle from 'assets/styles/global.style'
import * as S from './PageLayout.style'

const PageLayout = ({ children }) => {
  return (
    <S.PageLayout>
      <S.Stripe />
      <GlobalStyle />
      {children}
    </S.PageLayout>
  )
}

export default PageLayout
