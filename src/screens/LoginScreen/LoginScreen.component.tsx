import React, { useState } from 'react'
import Loading from 'components/Loading'
import * as S from './LoginScreen.style'

const LoginScreen = ({ initialized }) => {

  return (
    <Loading loading={!initialized}>
      <S.Title>LoginScreen</S.Title>
    </Loading>
  )
}

export default LoginScreen
