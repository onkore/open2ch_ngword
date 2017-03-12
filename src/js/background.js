import ngword from './ngwords'
import { abornPage } from './aborn'

chrome.contextMenus.create({
  title: '"%s" をNGワードに追加する',
  contexts: ['selection'],
  onclick: (info, tab) => {
    ngword.add(info.selectionText)

    chrome.tabs.sendMessage(tab.id, {event: 'addNGWord'})
  }
})
