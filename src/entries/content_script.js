import { abornPageCommand, abornPageByNGWordCommand } from '../commands/abornCommand'
import { removeNgCommand } from '../commands/removeNgCommand'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(`onMessage: type: ${request.type}`)
  console.log(request)
  switch (request.type) {
    case 'INITIALIZE_EXTENSION':
      return abornPageCommand()
    case 'ADD_NGWORD':
      return abornPageByNGWordCommand(request.ngword)
    case 'REMOVE_NGWORD':
      return removeNgCommand(`[data-ngword="${request.ngword}"]`)
    case 'CLEAR_NGWORDS':
      return removeNgCommand('dl[data-ngword]')
  }
})

chrome.extension.sendRequest({type: 'initialized'})
