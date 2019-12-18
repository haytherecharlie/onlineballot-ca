import React, { useEffect } from 'react'
import { Animated } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import theme from 'assets/styles/theme.style'
import types from 'prop-types'
import * as S from './Loading.style'

const Loading = ({ text, loading, children }) => {
  const animation = new Animated.Value(0)

  useEffect(() => {
    Animated.loop(Animated.timing(animation, { toValue: 1, duration: 2000 })).start()
  }, [Animated])

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg']
  })

  switch (loading) {
    case false:
      return <S.ChildWrapper>{children}</S.ChildWrapper>
    default:
      return (
        <S.LoadingWrapper>
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            <Svg width={theme.SPINNER_RADIUS} height={theme.SPINNER_RADIUS} x={0} y={0}>
              <Circle
                cx={20}
                cy={20}
                r={18}
                strokeWidth={4}
                stroke={theme.SECONDARY_COLOR}
                fill="transparent"
                strokeDasharray={Math.PI * 25}
                strokeLinecap="round"
              />
            </Svg>
          </Animated.View>
          <S.LoadingText>{text}</S.LoadingText>
        </S.LoadingWrapper>
      )
  }
}

Loading.defaultProps = {
  children: null,
  loading: true,
  text: ''
}

Loading.propTypes = {
  children: types.node,
  loading: types.bool,
  text: types.string
}

export default Loading
