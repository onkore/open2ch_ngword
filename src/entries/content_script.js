import { startObserver, abornPage } from '../libs/aborn'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'ADD_NGWORD':
      return abornPage()
    case 'REMOVE_NGWORD':
      document.querySelectorAll(`[data-aborn="${request.ngword}"]`).forEach((el) => {
        el.style.display = 'block'
        el.removeAttribute('data-aborn')
      })

      return
    case 'CLEAR_NGWORDS':
      document.querySelectorAll('dl[data-aborn]').forEach((el) => {
        el.style.display = 'block'
        el.removeAttribute('data-aborn')
      })
      return
  }
})

startObserver()
abornPage()
