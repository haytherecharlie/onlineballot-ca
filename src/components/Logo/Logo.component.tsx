import React from 'react'
import theme from 'assets/styles/theme.style'
import * as S from './Logo.style'

const Logo = () => {
  return (
    <S.Wrapper>
      <S.Logo
        source={theme.DARK_MODE ? require('../../assets/images/telus-me-dark.png') : require('../../assets/images/telus-me-light.png')}
        alt="Telus Me"
      />
    </S.Wrapper>
  )
}

export default Logo
