const defaultState = {
  user: {
    authenticated: false,
    data: {}
  }
}

export const applicationReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
