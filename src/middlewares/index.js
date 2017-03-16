const query = callback => {
  chrome.tabs.query({url: 'http://open.open2ch.net/test/read.cgi/*'}, tabs => {
    tabs.map(callback)
  })
}

export const chromeMessaging = store => next => action => {
  switch(action.type) {
    case 'ADD_NGWORD':
    case 'REMOVE_NGWORD':
    case 'CLEAR_NGWORDS':
    case 'INITIALIZE_EXTENSION':
      next(action)

      return query(tab => chrome.tabs.sendMessage(tab.id, action))
  }
}
