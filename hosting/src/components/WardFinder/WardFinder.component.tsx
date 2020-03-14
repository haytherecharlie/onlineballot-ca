import 'animate.css'
import 'react-google-places-autocomplete/dist/assets/index.css'
import React, { useState, useRef } from 'react'
import AutoComplete from 'react-google-places-autocomplete'
import { isDarkMode } from 'utils/helpers'
import * as S from './WardFinder.style'

const WardFinder = () => {
  const hiddenRef = useRef()
  const [top, setTop] = useState(`50%`)
  const [bottom, setBottom] = useState(`-50px`)
  const className = top === '250px' ? 'animated fadeOutUp faster' : ''

  const onFocus = () => {
    setBottom('25px')
    setTop('250px')
  }

  const onBlur = () => {
    setBottom('-50px')
    setTop('50%')
  }

  return (
    <S.WardFinder top={top}>
      <S.Logo src={isDarkMode() ? require('../../assets/images/lyac-light.png') : require('../../assets/images/lyac-dark.png')} alt="LYAC logo" />
      <S.Divider />
      <S.HiddenWrapper>
        <S.Title>Welcome to the LYAC election ballot</S.Title>
        <S.Paragraph className={className} ref={hiddenRef}>
          You can vote from either your home address or your school (whichever you identify most with). If you are voting from your school it often
          helps to write 'Elementary School' or 'Secondary School' to ensure it will show up in the search bar below.
        </S.Paragraph>
        <AutoComplete
          renderInput={(props) => (
            <S.PlaceInput bottom={bottom} onFocus={onFocus} onBlur={onBlur} placeholder='enter' {...props} />
          )}
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
