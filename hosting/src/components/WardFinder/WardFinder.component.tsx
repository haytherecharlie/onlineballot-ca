import 'react-google-places-autocomplete/dist/assets/index.css'
import React from 'react'
import AutoComplete from 'react-google-places-autocomplete'
import { isDarkMode } from 'utils/helpers'
import * as S from './WardFinder.style'

const WardFinder = () => {
  return (
    <S.WardFinder>
      <S.Logo src={isDarkMode() ? require('../../assets/images/lyac-light.png') : require('../../assets/images/lyac-dark.png')} alt="LYAC logo" />
      <S.Divider />
      <S.Title>Welcome to the LYAC election ballot</S.Title>
      <S.Paragraph>
        You can vote from either your home address or your school (whichever you identify most with). If you are voting from your school it often
        helps to write 'Elementary School' or 'Secondary School' to ensure it will show up in the search bar below.
      </S.Paragraph>
      <AutoComplete
        onSelect={console.log}
        placeholder="Enter Home or School Address..."
        // renderInput={(props) => <input {...props} />}
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
    </S.WardFinder>
  )
}

export default WardFinder
