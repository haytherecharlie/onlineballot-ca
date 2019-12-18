import { Appearance } from 'react-native-appearance'
import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
const guidelineWidth = 350
const darkMode = Appearance.getColorScheme() === 'dark'
const scale = (size) => `${(width / guidelineWidth) * size}px`

const PURPLE = `rgba(96, 57, 169, 1)`
const BLACK = `#000000`
const DARK_GRAY = `#222222`
const LIGHT_GRAY = `#F8F8F8`
const WHITE = `#FFFFFF`

export default {
  BACKGROUND_COLOR: DARK_GRAY,
  FOREGROUND_COLOR:  BLACK,
  PRIMARY_COLOR: WHITE,
  SECONDARY_COLOR: PURPLE,
  SPINNER_RADIUS: 40,
  FONT_SIZE_SMALL: scale(12),
  FONT_SIZE_MEDIUM: scale(14),
  FONT_SIZE_LARGE: scale(16),
  FONT_WEIGHT_LIGHT: 200,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_HEAVY: 800,
  MEDIA_QUERY_MOBILE: `@media only screen and (max-width: 750px)`,
  MEDIA_QUERY_TABLET: `@media only screen and (min-width: 751px)`,
  MEDIA_QUERY_DESKTOP: `@media only screen and (min-width: 1242px)`
}
