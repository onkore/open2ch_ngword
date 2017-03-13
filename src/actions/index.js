let nextActionId = 0
export const addNgWord = (ngword) => {
  return {
    id: nextActionId++,
    type: 'ADD_NGWORD',
    ngword
  }
}

export const clearNgWords = () => {
  return {
    type: 'CLEAR_NGWORDS'
  }
}

export const removeNgWord = (ngword) => {
  return {
    type: 'REMOVE_NGWORD',
    ngword
  }
}
