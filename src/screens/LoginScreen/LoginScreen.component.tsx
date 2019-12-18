import React, { useState } from 'react'
import { withNavigation } from 'react-navigation'
import Loading from 'components/Loading'
import * as S from './LoginScreen.style'

const LoginScreen = ({ initialized }) => {
  return (
    <Loading loading={!initialized}>
      <S.Title>LoginScreen</S.Title>
    </Loading>
  )
}

export default withNavigation(LoginScreen)
