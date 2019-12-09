import { Appearance } from 'react-native-appearance'
import { Dimensions } from 'react-native'

const whatSize = (width) => {
  switch (width) {
    case width < 750:
      return 'small'
    case width >= 750 && width <= 1242:
      return 'medium'
    default:
      return 'large'
  }
}

const configureSizeTheme = (callback) => {
  callback(whatSize(Dimensions.get('window').width))
  return Dimensions.addEventListener('change', ({ width }) => callback(whatSize(width)))
}

const configureColorTheme = (callback) => {
  callback(Appearance.getColorScheme())
  return Appearance.addChangeListener(({ colorScheme }) => callback(colorScheme))
}

const configureTheme = (colorCallback, sizeCallback) => {
  return configureSizeTheme(sizeCallback)
}

export default configureTheme
