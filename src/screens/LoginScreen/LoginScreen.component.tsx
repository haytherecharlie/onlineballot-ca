import React, { useState } from 'react'
import Loading from 'components/Loading'
import * as S from './LoginScreen.style'

const LoginScreen = () => {
  const [loading, toggleLoading] = useState(true)

  return (
    <Loading loading={loading}>
      <S.Title>LoginScreen</S.Title>
    </Loading>
  )
}

export default LoginScreen
