import 'animate.css'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import logo from 'assets/images/lyac.png'
import lock from 'assets/images/lock.png'
import Checkbox from 'atoms/Checkbox'
import * as S from './Ballot.style'

const Ballot = () => {
  const ref = useRef()

  useEffect(() => (ref && ref.current ? ref.current.focus() : null))

  const handleEnter = e => {
    if (e.keyCode === 13) {
      const form = e.target.form
      const index = Array.prototype.indexOf.call(form, e.target)
      form.elements[index + 1].focus()
      e.preventDefault()
    }
  }

  const { ward } = useSelector(s => s.address)

  return (
    <S.Ballot>
      <S.Logo src={logo} alt="LYAC logo" />
      <S.Sheet>
        <S.Title>{`Ward ${ward} Ballot`}</S.Title>
        <S.SubHeading>Personal Information</S.SubHeading>
        <form>
          <S.Input onKeyDown={handleEnter} placeholder="Your First Name" ref={ref} />
          <S.Input onKeyDown={handleEnter} placeholder="Your Last Name" />
          <S.Input onKeyDown={handleEnter} placeholder="Gender" />
          <S.Input onKeyDown={handleEnter} placeholder="Age" />
          <S.Input onKeyDown={handleEnter} placeholder="Email Address" />
          <S.Input onKeyDown={handleEnter} placeholder="Cell Phone Number" />
          <S.Divider height="10px" />
          <S.SubHeading>Your Vote (One Vote Per Person)</S.SubHeading>
          <Checkbox name="Marcus D. Jones" />
          <Checkbox name="David Amhurst Williamson" />
          <Checkbox name="Sven Proust" />
          <S.Divider height="10px" />
          <S.SubHeading>Referendum Question</S.SubHeading>
          <S.Text>What could London do to improve transportation for youth?</S.Text>
          <S.Input placeholder="Tell us what you think!" />
          <S.Vote>
            <S.Lock src={lock} />
            Cast Your Vote
          </S.Vote>
        </form>
      </S.Sheet>
    </S.Ballot>
  )
}

export default Ballot
