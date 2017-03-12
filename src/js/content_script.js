import { ABORN, startObserver, abornPage } from './aborn'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.event === 'addNGWord') {
    abornPage()
  }
})

startObserver()
abornPage()
