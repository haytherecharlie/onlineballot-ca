import { Appearance } from 'react-native-appearance'
import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
const guidelineWidth = 350
const darkMode = Appearance.getColorScheme() === 'dark' || Appearance.getColorScheme() === 'no-preference'
const scale = (size) => `${(width / guidelineWidth) * size}px`

const PURPLE = `rgba(96, 57, 169, 1)`
const BLACK = `#000000`
const DARK_GRAY = `#222222`
const LIGHT_GRAY = `#F8F8F8`
const WHITE = `#EFF3F8`

export default {
  BACKGROUND_COLOR: darkMode ? DARK_GRAY : WHITE,
  FOREGROUND_COLOR: darkMode ? DARK_GRAY : WHITE,
  PRIMARY_COLOR: darkMode ? WHITE : DARK_GRAY,
  SECONDARY_COLOR: darkMode ? DARK_GRAY : WHITE,
  HIGHLIGHT_COLOR: PURPLE,
  HEADER_COLOR: darkMode ? '#4b286d' : '#FFF',
  MENU_ICON_COLOR: darkMode ? '#FFF' : '#4b286d',
  JOB_CHART_COLOR: '#2B8001',
  MANAGER_CHART_COLOR: '#FACA69',
  PERFORMANCE_CHART_COLOR: '#4B286D',
  TEAM_CHART_COLOR: '#66CC00',
  SPINNER_RADIUS: 40,
  FONT_SIZE_SMALL: scale(12),
  FONT_SIZE_MEDIUM: scale(14),
  FONT_SIZE_LARGE: scale(16),
  FONT_WEIGHT_LIGHT: 200,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_HEAVY: 800,
  MEDIA_QUERY_MOBILE: `@media only screen and (max-width: 750px)`,
  MEDIA_QUERY_TABLET: `@media only screen and (min-width: 751px)`,
  MEDIA_QUERY_DESKTOP: `@media only screen and (min-width: 1242px)`,
  DARK_MODE: darkMode
}
