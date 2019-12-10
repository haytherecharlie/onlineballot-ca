import React, { useState, useEffect } from 'react'
import Loading from 'components/Loading'
import * as S from './LoginScreen.style'

const LoginScreen = () => {
  const [loading, toggleLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      toggleLoading(!loading)
    }, 6000)
  }, [])

  return (
    <Loading loading={loading}>
      <S.Title>LoginScreen</S.Title>
    </Loading>
  )
}

export default LoginScreen
