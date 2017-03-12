const ABORN = 'あぼーん'

module.exports = () => {
  chrome.storage.local.get({NGWords: []}, (store) => {
    console.log(store)
    if (store.NGWords.length === 0) {
      return
    }

    document.querySelectorAll('.thread > dl').forEach((el) => {
      store.NGWords.forEach((ngword) => {
        if (el.textContent.match(ngword)) {
          el.querySelector('dt > font b').textContent = ABORN
          el.querySelector('dd').textContent = ABORN
        }
      })
    })
  })
}
