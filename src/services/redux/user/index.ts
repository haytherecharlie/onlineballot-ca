const defaultState = {
  authenticated: false,
  data: {
    email: "charlie.hay@telus.com",
    name: "Charlie Hay",
    photo: "https://avatars1.githubusercontent.com/u/43853551?s=460&v=4",
    team: "Spacejam"
  }
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
