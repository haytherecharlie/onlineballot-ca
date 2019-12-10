import React, { useEffect } from 'react'
import { Animated } from 'react-native'
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
            <S.SVG>
              <S.Spinner  />
            </S.SVG>
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
