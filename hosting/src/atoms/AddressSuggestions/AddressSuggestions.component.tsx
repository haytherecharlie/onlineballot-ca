import React from 'react'
import * as S from './AddressSuggestions.style'

const AddressSuggestions = ({ active, suggestions, onSelect }) => (
  <S.AddressSuggestions>
    {suggestions.map((suggestion, id) => {
      const { description } = suggestion
      return (
        <S.Suggestion onClick={e => onSelect(suggestion, e)} className={`suggestion ${active === id ? 'selected' : ''}`}>
          {description.length > 35 ? `${description.substr(0, 35)}...` : description}
        </S.Suggestion>
      )
    })}
  </S.AddressSuggestions>
)

export default AddressSuggestions
