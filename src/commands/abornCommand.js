import getStatesFromChromeStorage from '../storage'
import { nodeListToArray, getThreadComments } from '../util'

const isNgComment = (comment, ngword) => {
  return !!comment.textContent.match(ngword)
}

const filterThreadComments = results => {
  const [states, comments] = results

  comments.forEach(comment => {
    states.forEach(state => {
      if (isNgComment(comment, state.ngword))
        comment.dataset.ngword = state.ngword
    })
  })

  return comments.filter(c => c.hasAttribute('data-ngword'))
}

const debugMessage = (filtered) => {
  console.log(`filtered: ${filtered.length}`)
  console.log(filtered)
}

export const abornNodeCommand = (nodes) => {
  return Promise.all([getStatesFromChromeStorage(), nodes])
    .then(filterThreadComments)
    .then(debugMessage)
    .catch(e => console.log(e))
}

export const abornPageCommand = (query = '.thread > dl') => {
  return Promise.all([getStatesFromChromeStorage(), getThreadComments(query)])
    .then(filterThreadComments)
    .then(debugMessage)
    .catch(e => console.log(e))
}

export const abornPageByNGWordCommand = (ngword) => {
  return Promise.all([[{ ngword }], getThreadComments()])
    .then(filterThreadComments)
    .then(debugMessage)
    .catch(e => console.log(e))
}
