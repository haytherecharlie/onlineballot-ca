export const postOptions = (body) => ({
  method: 'POST',
  body,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json'
  }
})

export const getOptions = () => ({
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json'
  }
})
