import React from 'react'
import { withNavigation } from 'react-navigation'
import * as S from './VacationScreen.style'

const VacationScreen = () => {
  return (
    <S.VacationScreen>
      <S.Title>VacationScreen</S.Title>
    </S.VacationScreen>
  )
}

export default withNavigation(VacationScreen)
