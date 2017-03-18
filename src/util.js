export const nodeListToArray = nodeList => Array.prototype.slice.call(nodeList)

export const getThreadComments = (query = '.thread > dl') => {
  return new Promise(resolve => resolve(nodeListToArray(document.querySelectorAll(query))))
}
