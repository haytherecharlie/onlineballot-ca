import React from 'react'
import theme from 'assets/styles/theme.style'
import * as S from './Header.style'

const Header = () => {
  return (
    <S.Wrapper>
      <S.Menu>&#x2630;</S.Menu>
      <S.Logo source={theme.DARK_MODE ? require('../../assets/images/telus-me-dark.png') : require('../../assets/images/telus-me-light.png')} alt="Telus Me" />
      <S.Profile/>
    </S.Wrapper>
  )
}

export default Header
