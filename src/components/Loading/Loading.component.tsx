import React, { useEffect } from 'react'
import { Animated } from 'react-native'
import types from 'prop-types'
import Svg, { Circle } from 'react-native-svg'
import * as S from './Loading.style'

const Loading = ({ text }) => {
  const animation = new Animated.Value(0)

  useEffect(() => {
    Animated.loop(Animated.timing(animation, { toValue: 1, duration: 2000 })).start()
  }, [Animated])

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg']
  })

  return (
    <S.Wrapper>
      <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <Svg height={40} width={40} x={0} y={0}>
          <Circle
            cx={20}
            cy={20}
            r={18}
            strokeWidth={4}
            stroke="#FFF"
            fill="transparent"
            strokeDasharray={Math.PI * 25}
            strokeLinecap="round"
          />
        </Svg>
      </Animated.View>
      <S.LoadingText>{text}</S.LoadingText>
    </S.Wrapper>
  )
}

Loading.defaultProps = {
  text: ''
}

Loading.propTypes = {
  text: types.string
}

export default Loading
