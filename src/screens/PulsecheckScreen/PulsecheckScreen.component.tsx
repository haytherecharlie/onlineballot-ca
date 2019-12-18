import React from 'react'
import { withNavigation } from 'react-navigation'
import * as S from './PulsecheckScreen.style'

const PulsecheckScreen = () => {
  return (
    <S.PulsecheckScreen>
      <S.Title>PulsecheckScreen</S.Title>
    </S.PulsecheckScreen>
  )
}

export default withNavigation(PulsecheckScreen)
