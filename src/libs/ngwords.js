import { ABORN, abornPage } from './aborn'

const STORAGE_KEY = {NGWords: []}

export default {
  all: (fn) => {
    chrome.storage.local.get(STORAGE_KEY, (store) => {
      store.NGWords.forEach((ngword) => fn(ngword))
    })
  },

  add: (ngword) => {
    if (ngword === ABORN) {
      alert(`${ABORN} をNGワードにするのは止めてクレメンス`)

      return
    }

    chrome.storage.local.get(STORAGE_KEY, (store) => {
      store.NGWords.push(ngword)

      chrome.storage.local.set(store, () => {
        //alert(`${ngword} をNGワードに登録しました`)
      })
    })
  },

  remove: (ngword, cb = () => {}) => {
    chrome.storage.local.get(STORAGE_KEY, (store) => {
      const pos = store.NGWords.indexOf(ngword)

      if (pos !== -1) {
        store.NGWords.splice(pos, 1)

        chrome.storage.local.set(store, cb)
      }
    })
  },

  clear: (cb = () => {}) => {
    chrome.storage.local.clear()

    cb()
  }
}
