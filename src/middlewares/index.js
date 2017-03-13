import ngwords from '../libs/ngwords'

export const chromeMessaging = store => next => action => {
  switch(action.type) {
    case 'ADD_NGWORD':
      ngwords.add(action.ngword)

      next(action)

      chrome.tabs.query({active: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, action)
      })
      return
    case 'REMOVE_NGWORD':
      ngwords.remove(action.ngword)

      next(action)

      chrome.tabs.query({active: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, action)
      })
      return
    case 'CLEAR_NGWORDS':
      ngwords.clear(() => {
        next(action)

        chrome.tabs.query({active: true}, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, action)
        })
      })
      return
    default:
      next(action)
      return
  }
}
