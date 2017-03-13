const ngword = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NGWORD':
      return {
        id: action.id,
        ngword: action.ngword
      }
    case 'REMOVE_NGWORD':
      console.log(state)
    default:
      return state;
  }
}

const ngwords = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NGWORD':
      return [
        ...state,
        ngword(undefined, action)
      ]
    case 'REMOVE_NGWORD':
      ngword(state, action)

      return [
        ...state
      ]
    default:
      return state
  }
}

export default ngwords
