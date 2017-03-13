import { applyMiddleware, createStore, compose } from 'redux'
import { wrapStore } from 'react-chrome-redux'
import createLogger from 'redux-logger'
import { addNgWord } from '../actions'
import ngwords from '../libs/ngwords'
import reducers from '../reducers'
import { chromeMessaging } from '../middlewares'

const initializeStore = (store) => {
  chrome.storage.local.get({NGWords: []}, (storage) => {
    storage.NGWords.forEach((ngword) => {
      store.dispatch(addNgWord(ngword))
    })
  })
}

const store = createStore(
  require('../reducers').default,
  applyMiddleware(
    createLogger(),
    chromeMessaging
  )
)

initializeStore(store)

wrapStore(store, {portName: 'OPEN2CH_NGWORD'})

chrome.contextMenus.create({
  title: '"%s" をNGワードに追加する',
  contexts: ['selection'],
  onclick: (info, tab) => {
    store.dispatch(addNgWord(info.selectionText))
  }
})
