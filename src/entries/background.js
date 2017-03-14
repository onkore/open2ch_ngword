import { applyMiddleware, createStore, compose } from 'redux'
import { wrapStore } from 'react-chrome-redux'
import createLogger from 'redux-logger'
import { initializeExtension, addNgWord } from '../actions'
import reducers from '../reducers'
import { chromeMessaging } from '../middlewares'

const store = createStore(
  require('../reducers').default,
  applyMiddleware(
    createLogger(),
    chromeMessaging
  )
)

chrome.storage.local.get({state: []}, storage => {
  store.dispatch(initializeExtension(storage.state))
})

wrapStore(store, {portName: 'OPEN2CH_NGWORD'})

chrome.contextMenus.create({
  title: '"%s" をNGワードに追加する',
  contexts: ['selection'],
  onclick: (info, tab) => {
    store.dispatch(addNgWord(info.selectionText))
  }
})
