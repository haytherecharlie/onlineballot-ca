export const isWeb = () => {
  return typeof window !== 'undefined'
}

export const validate = () => ({
  name: name => {
    const validName = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/g
    return validName.test(name)
  }
})
