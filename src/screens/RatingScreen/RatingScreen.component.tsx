import React from 'react'
import { useSelector } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { Rating, AirbnbRating } from 'react-native-ratings'
import { format } from 'date-fns'
import { db } from 'services/firebase'
import Spacer from 'components/Spacer'
import theme from 'assets/styles/theme.style'
import * as S from './RatingScreen.style'

const RatingScreen = ({ navigation }) => {
  const { uid } = useSelector((s) => s.user.data)

  const handleRating = (type, rating) => {
    const date = format(new Date().getTime(), `yyyy-MM-dd`)
    db.doc(`pulsecheck/${uid}/responses/${type}`).update({ [`${date}`]: rating })
  }

  return (
    <S.Wrapper>
      <S.Box>
        <S.Title>Manager Approval</S.Title>
        <S.Description>How well do you feel you are supported and encouraged by your manager?</S.Description>
        <AirbnbRating
          count={5}
          showRating={false}
          selectedColor={theme.HIGHLIGHT_COLOR}
          defaultRating={0}
          size={30}
          onFinishRating={(r) => handleRating('manager_approval', r)}
        />
      </S.Box>
      <S.Box>
        <S.Title>Job Satisfaction</S.Title>
        <S.Description>How satisfied are you with your daily experience at Telus Digital?</S.Description>
        <AirbnbRating
          count={5}
          showRating={false}
          selectedColor={theme.HIGHLIGHT_COLOR}
          defaultRating={0}
          size={30}
          onFinishRating={(r) => handleRating('job_satisfaction', r)}
        />
      </S.Box>
      <S.Box>
        <S.Title>My Performance</S.Title>
        <S.Description>How well would you rate your contribution to both Telus Digital and your team?</S.Description>
        <AirbnbRating
          count={5}
          showRating={false}
          selectedColor={theme.HIGHLIGHT_COLOR}
          defaultRating={0}
          size={30}
          onFinishRating={(r) => handleRating('my_performance', r)}
        />
      </S.Box>
      <S.Box>
        <S.Title>Team Rating</S.Title>
        <S.Description>How well do you feel supported and challenged by your team?</S.Description>
        <AirbnbRating
          count={5}
          showRating={false}
          selectedColor={theme.HIGHLIGHT_COLOR}
          defaultRating={0}
          size={30}
          onFinishRating={(r) => handleRating('team_rating', r)}
        />
      </S.Box>
      <S.Button onPress={() => navigation.navigate('DashboardScreen')}>
        <S.ButtonText>Finish</S.ButtonText>
      </S.Button>
      <Spacer />
    </S.Wrapper>
  )
}

export default withNavigation(RatingScreen)
