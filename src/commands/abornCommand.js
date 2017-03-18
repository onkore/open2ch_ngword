import getStatesFromChromeStorage from '../storage'

export const nodeListToArray = nodeList => Array.prototype.slice.call(nodeList)

export const getThreadComments = (query = '.thread > dl') => {
  return new Promise(resolve => resolve(nodeListToArray(document.querySelectorAll(query))))
}

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

export const abornNodeCommand = (nodes) => {
  return Promise.all([getStatesFromChromeStorage(), nodes])
    .then(filterThreadComments)
}

export const abornPageCommand = (query = '.thread > dl') => {
  return Promise.all([getStatesFromChromeStorage(), getThreadComments(query)])
    .then(filterThreadComments)
}
