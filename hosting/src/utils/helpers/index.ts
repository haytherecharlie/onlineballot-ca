export const isWeb = () => {
  return typeof window !== 'undefined'
}

export const isDarkMode = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}
