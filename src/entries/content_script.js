import { Store } from 'react-chrome-redux'

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(el => {
      chrome.storage.local.get({state: []}, storage => {
        storage.state.forEach(o => abornComment(el, o.ngword))
      })
    })
  })
})

const abornComment = (dl, ngword) => {
  if (dl.textContent.match(ngword)) {
    console.log(`match: ${ngword} => ${dl.textContent}`)
    dl.dataset.aborn = ngword
    dl.style.display = 'none'

    return true
  }
  return false
}

const abornPage = () => {
  let count = 0
  document.querySelectorAll('.thread > dl').forEach(el => {
    chrome.storage.local.get({state: []}, storage => {
      storage.state.forEach(o => {
        if (abornComment(el, o.ngword)) {
          ++count
        }
      })
    })
  })
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'ADD_NGWORD':
      console.log('ADD_NGWORD')
      return abornPage()
    case 'REMOVE_NGWORD':
      console.log('REMOVE_NGWORD')
      return document.querySelectorAll(`[data-aborn="${request.ngword}"]`).forEach((el) => {
        el.style.display = 'block'
        el.removeAttribute('data-aborn')
      })
    case 'CLEAR_NGWORDS':
      console.log('CLEAR_NGWORDS')
      return document.querySelectorAll('dl[data-aborn]').forEach((el) => {
        el.style.display = 'block'
        el.removeAttribute('data-aborn')
      })
  }
})

const thread = document.querySelector('.thread')
observer.observe(thread, {attributes: true, childList: true, characterData: true})

abornPage()
