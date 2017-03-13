export const addNgWord = (ngword) => {
  return {
    type: 'ADD_NGWORD',
    ngword
  }
}

export const removeNgWord = (ngword) => {
  return {
    type: 'REMOVE_NGWORD',
    ngword
  }
}
