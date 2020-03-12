import { isDarkMode } from 'utils/helpers'
const darkMode = isDarkMode()

export default {
  // Colors
  BACKGROUND_COLOR: darkMode ? '#222222' : '#F0F3F8',
  DEFAULT_COLOR: darkMode ? '#FFFFFF' : '#262359',
  PRIMARY_COLOR: '#5A3DA3',
  SECONDARY_COLOR: '#99c047',

  // Media Queries
  SMALL_VIEW: 400,
  MEDIUM_VIEW: 700,
  LARGE_VIEW: 1000,
  SMALL_QUERY: `@media only screen and (max-width: 400px)`,
  MEDIUM_QUERY: `@media only screen and (max-width: 700px)`,
  LARGE_QUERY: `@media only screen and (max-width: 1000px)`,

  // Font Size
  FONT_SMALL: 15,
  FONT_MEDIUM: 25,
  FONT_LARGE: 35,

  // Font Weight
  FONT_LIGHT: 200,
  FONT_REGULAR: 600,
  FONT_HEAVY: 800
}
