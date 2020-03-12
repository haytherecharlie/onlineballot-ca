import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SET_DIMENSIONS } from 'services/redux/actions'
import theme from 'assets/styles/theme.style'

const useDimensions = () => {
  const dispatch = useDispatch()
  const breakPoint = theme.LARGE_VIEW
  
  useEffect(() => {
    let previous = 'desktop'
    const getSize = () => {
      if (window.innerWidth > breakPoint && previous !== 'desktop') {
        previous = 'desktop'
        return dispatch({ type: SET_DIMENSIONS, value: 'desktop' })
      }
      if (window.innerWidth < breakPoint && previous !== 'mobile') {
        previous = 'mobile'
        return dispatch({ type: SET_DIMENSIONS, value: 'mobile' })
      }
    }

    if (typeof window !== 'undefined') {
      getSize()
      window.addEventListener('resize', getSize)
      return () => window.removeEventListener('resize', getSize)
    }
  })
}

export default useDimensions
