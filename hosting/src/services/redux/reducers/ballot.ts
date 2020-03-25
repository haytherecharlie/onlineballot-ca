import * as A from '../actions'

const dState = {
  firstName: { value: null, valid: 'PENDING' },
  lastName: { value: null, valid: 'PENDING' },
  gender: { value: null, valid: 'PENDING' },
  age: { value: null, valid: 'PENDING' },
  email: { value: null, valid: 'PENDING' },
  phone: { value: null, valid: 'PENDING' },
  voteFor: { value: null, valid: 'PENDING' },
  referendum: { value: null, valid: 'PENDING' }
}

const reducer = (state = dState, action) => {
  switch (action.type) {
    case A.FIRST_NAME:
      return { ...state, firstName: { value: action.value, valid: action.valid } }
    case A.LAST_NAME:
      return { ...state, lastName: { value: action.value, valid: action.valid } }
    case A.GENDER:
      return { ...state, gender: { value: action.value, valid: action.valid } }
    case A.AGE:
      return { ...state, age: { value: action.value, valid: action.valid } }
    case A.EMAIL:
      return { ...state, email: { value: action.value, valid: action.valid } }
    case A.PHONE:
      return { ...state, phone: { value: action.value, valid: action.valid } }
    case A.VOTE_FOR:
      return { ...state, voteFor: { value: action.value, valid: action.valid } }
    case A.REFERENDUM:
      return { ...state, referendum: { value: action.value, valid: action.valid } }
    default:
      return state
  }
}

export default reducer
