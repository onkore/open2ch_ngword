import { abornPageCommand } from '../commands/abornCommand'
import { removeNgCommand } from '../commands/removeNgCommand'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(`onMessage: type: ${request.type}`)
  switch (request.type) {
    case 'INITIALIZE_EXTENSION':
    case 'ADD_NGWORD':
      return abornPageCommand()
    case 'REMOVE_NGWORD':
      return removeNgCommand(`[data-ngword="${request.ngword}"]`)
    case 'CLEAR_NGWORDS':
      return removeNgCommand('dl[data-ngword]')
  }
})

chrome.extension.sendRequest({type: 'initialized'})
