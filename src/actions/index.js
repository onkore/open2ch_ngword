export const initializeExtension = (storage) => {
  return {
    type: 'INITIALIZE_EXTENSION',
    storage
  }
}

export const addNgWord = (ngword) => {
  return {
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
