import { getThreadComments } from '../util'

const removeNgWord = (comments) => {
  return comments.map(c => c.removeAttribute('data-ngword'))
}

export const removeNgCommand = (query) => {
  return getThreadComments(query).then(removeNgWord)
}
