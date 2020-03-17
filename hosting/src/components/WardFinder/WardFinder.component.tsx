import React, { useState } from 'react'
import AutoComplete from 'react-google-places-autocomplete'
import logo from 'assets/images/lyac.png'
import AddressInput from 'atoms/AddressInput'
import AddressSuggestions from 'atoms/AddressSuggestions'
import * as S from './WardFinder.style'

const WardFinder = () => {
  // const [collapsed, setCollapsed] = useState(false)
  const [value, setValue] = useState('')

  const blurInput = () => {
    // setCollapsed(false)
  }

  const focusInput = () => {
    setValue('')
    // setCollapsed(true)
  }

  const changeInput = (e, onChange) => {
    setValue(e.target.value)
    onChange(e)
  }

  const selectPlaceInput = ({ description }) => {
    console.log(description)
    setValue(description)
  }

  return (
    <S.WardFinder>
      <S.Logo src={logo} alt="LYAC logo" />
      <S.Divider />
      <S.Title>Welcome to the LYAC election ballot</S.Title>
      <S.Paragraph>
        You can vote from either your home address or your school (whichever you identify most with). If you are voting from your school it often
        helps to write 'Elementary School' or 'Secondary School' to ensure it will show up in the search bar below.
      </S.Paragraph>
      <S.PlacesInput>
        <AutoComplete
          onSelect={selectPlaceInput}
          renderInput={({ onChange, onKeyDown }) => (
            <AddressInput value={value} onFocus={focusInput} onBlur={blurInput} onChange={e => changeInput(e, onChange)} onKeyDown={onKeyDown} />
          )}
          renderSuggestions={(active, suggestions, onSelect) => <AddressSuggestions active={active} suggestions={suggestions} onSelect={onSelect} />}
          autocompletionRequest={{
            bounds: [
              { lat: 42.82311, lng: -81.61263 },
              { lat: 43.07441, lng: -80.88478 }
            ],
            componentRestrictions: { country: 'CA' },
            types: []
          }}
        />
      </S.PlacesInput>
    </S.WardFinder>
  )
}

export default WardFinder
