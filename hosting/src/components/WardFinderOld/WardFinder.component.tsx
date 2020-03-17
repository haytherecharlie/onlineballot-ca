import 'animate.css'
import React, { useState } from 'react'
import logo from 'assets/images/lyac.png'
import AddressInput from 'atoms/AddressInput'
import * as S from './WardFinder.style'

const WardFinder = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <S.WardFinder>
      {/* <S.Logo src={logo} alt="LYAC logo" />
      <S.Divider />
      <S.Title>Welcome to the LYAC election ballot</S.Title>
      <S.HiddenWrapper collapsed={collapsed}>
        <S.Paragraph className={collapsed ? 'animated fadeOutUp faster' : ''}>
          You can vote from either your home address or your school (whichever you identify most with). If you are voting from your school it often
          helps to write 'Elementary School' or 'Secondary School' to ensure it will show up in the search bar below.
        </S.Paragraph> */}
        <AddressInput setCollapsed={setCollapsed} />
      {/* </S.HiddenWrapper> */}
    </S.WardFinder>
  )
}

export default WardFinder
