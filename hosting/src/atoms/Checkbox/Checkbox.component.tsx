import 'animate.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import checkmark from 'assets/images/checkmark.png'
import * as A from 'services/redux/actions'
import * as S from './Checkbox.style'

const Checkbox = ({ name }) => {
  const dispatch = useDispatch()
  const { value } = useSelector(s => s.ballot.voteFor)
  const checked = value === name

  const onChange = e => dispatch({ type: A.VOTE_FOR, value: e.target.value, valid: 'VALID' })

  return (
    <S.Checkbox>
      <S.Selection>
        <S.Radio type="radio" name={name} value={name} onChange={onChange} checked={checked} />
        <S.Box class="checkmark" checked={checked} />
        {checked && <S.Checkmark src={checkmark} checked={checked} className="animated jackInTheBox faster" />}
      </S.Selection>
      <S.Name>{name}</S.Name>
    </S.Checkbox>
  )
}

export default Checkbox
