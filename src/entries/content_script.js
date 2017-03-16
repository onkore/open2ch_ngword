import { Store } from 'react-chrome-redux'
import { abornNodeCommand, abornPageCommand } from '../commands/abornCommand'

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => abornNodeCommand(mutation.addedNodes))
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request)
  switch (request.type) {
    case 'INITIALIZE_EXTENSION':
    case 'ADD_NGWORD':
      return abornPageCommand()
    case 'REMOVE_NGWORD':
      return abornPageCommand(`[data-aborn="${request.ngword}"]`)
    case 'CLEAR_NGWORDS':
      return abornPageCommand('dl[data-aborn]')
  }
})

const thread = document.querySelector('.thread')
observer.observe(thread, {attributes: true, childList: true, characterData: true})
