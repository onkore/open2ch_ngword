import store from '../store'
import { wrapStore } from 'react-chrome-redux'
import { initializeExtension, addNgWord } from '../actions'
import reducers from '../reducers'
import getStatesFromChromeStorage from '../storage'

wrapStore(store, {portName: 'OPEN2CH_NGWORD'})

const parent = chrome.contextMenus.create({
  title: 'Open2ch NGワード',
  contexts: ['selection'],
  documentUrlPatterns: ['http://open.open2ch.net/test/read.cgi/*']
})

chrome.contextMenus.create({
  title: '"%s" をNGワードに追加する',
  contexts: ['selection'],
  parentId: parent,
  onclick: (info, tab) => store.dispatch(addNgWord(info.selectionText))
})

chrome.extension.onRequest.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'initialized':
      getStatesFromChromeStorage()
        .then(state => store.dispatch(initializeExtension(state)))
      return
  }
})
