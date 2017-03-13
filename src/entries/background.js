import { applyMiddleware, createStore } from 'redux'
import { wrapStore } from 'react-chrome-redux'
import createLogger from 'redux-logger'
import { addNgWord } from '../actions'
import ngwords from '../libs/ngwords'

const initializeStore = (store) => {
  chrome.storage.local.get({NGWords: []}, (storage) => {
    storage.NGWords.forEach((ngword) => {
      store.dispatch(addNgWord(ngword))
    })
  })
}

const logger = createLogger()
const store = createStore(
  require('../reducers').default,
  applyMiddleware(logger)
)

initializeStore(store)

wrapStore(store, {portName: 'OPEN2CH_NGWORD'})

chrome.contextMenus.create({
  title: '"%s" をNGワードに追加する',
  contexts: ['selection'],
  onclick: (info, tab) => {
    ngwords.add(info.selectionText)

    chrome.tabs.sendMessage(tab.id, {event: 'addNGWord'})
  }
})
