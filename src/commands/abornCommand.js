export const getStatesFromChromeStorage = () => {
  return new Promise(resolve => {
    chrome.storage.local.get({state: []},
      storage => resolve(storage.state))
  })
}

const nodeListToArray = nodeList => Array.prototype.slice.call(nodeList)

const getThreadComments = (query = '.thread > dl') => {
  return new Promise(resolve => {
    const comments = nodeListToArray(document.querySelectorAll(query))

    resolve(comments)
  })
}

const isNgComment = (text, ngword) => text.match(ngword)

const filterThreadComments = results => {
  const [states, comments] = results

  return comments.filter(comment => !!states.filter(state => isNgComment(comment.textContent, state.ngword)).length)
}

const abornThreadComments = comments => comments.map(el => el.style.display = 'none')

export const abornNodeCommand = (nodes) => {
  return getStatesFromChromeStorage()
    .then(states => filterThreadComments([states, nodeListToArray(nodes)]))
    .then(abornThreadComments)
    .then(f => console.log(f))
}

export const abornPageCommand = (query = '.thread > dl') => {
  return Promise.all([getStatesFromChromeStorage(), getThreadComments(query)])
    .then(filterThreadComments)
    .then(abornThreadComments)
    .then(found => console.log(found))
}
