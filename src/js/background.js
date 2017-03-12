import ngword from './ngwords'

chrome.contextMenus.create({
  title: '"%s" をNGワードに追加する',
  contexts: ['selection'],
  onclick: (info, tab) => {
    ngword.add(info.selectionText)
  }
})
