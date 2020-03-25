export default {
  // Colors
  BACKGROUND_COLOR: '#F0F3F8',
  BALLOT_COLOR: '#FFFFFF',
  DEFAULT_COLOR: '#262359',
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
  FONT_HEAVY: 800,

  // Input Style
  INPUT_STYLE: {
    boxSizing: 'border-box',
    margin: `10px 0`,
    width: `100%`,
    padding: `5px 10px 3px 10px`,
    border: 'none',
    borderBottom: `1px solid rgba(0,0,0,0.1)`,
    borderRadius: 5,
    color: '#262359',
    textAlign: 'left',
    background: `#FFFFFF`,
    '&::placeholder': {
      color: '#777777'
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 3px blue`
    }
  }
}
