const ngword = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NGWORD':
      return {
        ngword: action.ngword
      }
    default:
      return state
  }
}

const ngwords = (state = [], action) => {
  switch (action.type) {
    case 'INITIALIZE_EXTENSION':
      return action.storage
    case 'ADD_NGWORD':
      return [
        ...state,
        ngword(undefined, action)
      ]
    case 'CLEAR_NGWORDS':
      return []
    case 'REMOVE_NGWORD':
      return state.filter(s => s.ngword !== action.ngword)
    default:
      return state
  }
}

export default ngwords
