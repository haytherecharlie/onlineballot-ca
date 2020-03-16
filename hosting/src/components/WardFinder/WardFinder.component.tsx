import 'animate.css'
import 'react-google-places-autocomplete/dist/assets/index.css'
import React, { useState, useRef } from 'react'
import AutoComplete from 'react-google-places-autocomplete'
import logo from 'assets/images/lyac.png'
import * as S from './WardFinder.style'

const WardFinder = () => {
  const hiddenRef = useRef()
  const [collapsed, setCollapsed] = useState(false)

  const onFocus = () => {
    setCollapsed(true)
  }

  const onBlur = () => {
    setCollapsed(false)
  }

  return (
    <S.WardFinder collapsed={collapsed}>
      <S.Logo src={logo} alt="LYAC logo" />
      <S.Divider />
      <S.Title>Welcome to the LYAC election ballot</S.Title>
      <S.HiddenWrapper collapsed={collapsed}>
        <S.Paragraph className={collapsed ? 'animated fadeOutUp faster' : ''} ref={hiddenRef}>
          You can vote from either your home address or your school (whichever you identify most with). If you are voting from your school it often
          helps to write 'Elementary School' or 'Secondary School' to ensure it will show up in the search bar below.
        </S.Paragraph>
        <AutoComplete
          renderInput={props => <S.PlaceInput onFocus={onFocus} onBlur={onBlur} placeholder="enter" {...props} />}
          // renderSuggestions={(a, s, on) => <div>{s[0].description}</div>}
          autocompletionRequest={{
            bounds: [
              { lat: 42.774235, lng: -81.570954 },
              { lat: 43.173135, lng: -80.880189 }
            ],
            componentRestrictions: { country: 'CA' },
            types: []
          }}
        />
      </S.HiddenWrapper>
    </S.WardFinder>
  )
}

export default WardFinder
