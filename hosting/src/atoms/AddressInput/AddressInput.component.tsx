import React from 'react'
import * as S from './AddressInput.style'

const AddressInput = ({ value, onFocus, onBlur, onChange, onKeyDown }) => {
  return (
    <S.AddressInput>
      <S.Input
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        autoComplete="off"
        id="-google-places-autocomplete-input"
        type="text"
        placeholder="Enter Street Address..."
        required
      />
    </S.AddressInput>
  )
}

export default AddressInput
