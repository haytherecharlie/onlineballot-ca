import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { withNavigation } from 'react-navigation'
import theme from 'assets/styles/theme.style'
import Loading from 'components/Loading'
import { format } from 'date-fns'
import { TOGGLE_AUTH } from 'services/redux'
import { auth, db } from 'services/firebase'
import { validateEmail } from 'utils/helpers/validate'
import * as S from './LoginScreen.style'

const LoginScreen = ({ initialized }) => {
  const dispatch = useDispatch()
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const checkEmail = () => (!validateEmail(emailInput) ? setEmailError('Invalid email address') : setEmailError(''))
  const onSubmit = async () => {
    if (validateEmail(emailInput) && passwordInput !== '') {
      try {
        const { user } = await auth.signInWithEmailAndPassword(emailInput, passwordInput)
        const { providerData, uid } = user
        const { displayName, email, photoUrl } = providerData

        const responses = await db.doc(`pulsecheck/${uid}/responses/job_satisfaction`).get()
        const data = (await responses.data()) || undefined
        if (!data) {
          const date = new Date()
          const baseData = {
            [`${format(date.setDate(date.getDate() - 3), `yyyy-MM-dd`)}`]: 0,
            [`${format(date.setDate(date.getDate() - 2), `yyyy-MM-dd`)}`]: 0,
            [`${format(date.setDate(date.getDate() - 1), `yyyy-MM-dd`)}`]: 0
          }
          const batch = db.batch()
          batch.set(db.doc(`pulsecheck/${uid}/responses/job_satisfaction`), baseData)
          batch.set(db.doc(`pulsecheck/${uid}/responses/manager_approval`), baseData)
          batch.set(db.doc(`pulsecheck/${uid}/responses/my_performance`), baseData)
          batch.set(db.doc(`pulsecheck/${uid}/responses/team_rating`), baseData)
          await batch.commit()
        }
        return dispatch({ type: TOGGLE_AUTH, status: true, value: { uid, displayName, email, photoUrl } })
      } catch (err) {
        return setPasswordError('Invalid Email or Password')
      }
    }
    return setPasswordError('Invalid Email or Password')
  }

  return (
    <S.Wrapper behavior="padding">
      <S.Logo
        source={theme.DARK_MODE ? require('../../assets/images/telus-me-dark.png') : require('../../assets/images/telus-me-light.png')}
        alt="Telus Me Logo"
      />
      <S.Input
        autoFocus={true}
        type="email"
        placeholderTextColor="#777"
        autoCompleteType="email"
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Enter your email address"
        value={emailInput}
        onChangeText={(text) => {
          setEmailInput(text)
          setEmailError('')
          setPasswordError('')
        }}
        onBlur={checkEmail}
        onSubmitEditing={onSubmit}
      />
      <S.InputLabel>{emailError}</S.InputLabel>
      <S.Input
        type="password"
        value={passwordInput}
        onChangeText={(text) => {
          setPasswordInput(text)
          setPasswordError('')
        }}
        placeholderTextColor="#777"
        autoCompleteType="password"
        secureTextEntry={true}
        placeholder="Enter your password"
        onSubmitEditing={onSubmit}
      />
      <S.InputLabel>{passwordError}</S.InputLabel>
      <S.Button onPress={onSubmit}>
        <S.Title>Submit</S.Title>
      </S.Button>
    </S.Wrapper>
  )
}

export default withNavigation(LoginScreen)
