const query = callback => {
  chrome.tabs.query({url: 'http://open.open2ch.net/test/read.cgi/*'}, tabs => tabs.map(callback))
}

export const chromeMessaging = store => next => action => {
  next(action)

  return query(tab => chrome.tabs.sendMessage(tab.id, action))
}
