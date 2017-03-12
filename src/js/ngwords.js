import { ABORN, abornPage } from './aborn'

const NG_WORDS = {NGWords: []}

export default {
  all: (fn) => {
    chrome.storage.local.get(NG_WORDS, (store) => {
      store.NGWords.forEach((ngword) => fn(ngword))
    })
  },

  add: (ngword) => {
    console.log(ngword)
    if (ngword === ABORN) {
      alert(`${ABORN} をNGワードにするのは止めてクレメンス`)

      return
    }

    chrome.storage.local.get(NG_WORDS, (store) => {
      store.NGWords.push(ngword)

      chrome.storage.local.set(store, () => {
        alert(`${ngword} をNGワードに登録しました`)
      })
    })
  }
}
