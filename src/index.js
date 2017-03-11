const ABORN = 'あぼーん'

const addNGWord = (word) => {
  if (word === ABORN) {
    alert('あぼーんをNGワードにするのは止めてクレメンス')

    return
  }

  chrome.storage.local.get({NGWords: []}, (store) => {
    store.NGWords.push(word)

    chrome.storage.local.set(store, () => {
      alert(`${word} をNGワードに登録しました`)

      aborn()
    })
  })
}

const aborn = () => {
  chrome.storage.local.get({NGWords: []}, (store) => {
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

document.addEventListener('mouseup', (event) => {
  const selection = window.getSelection().toString().trim()

  if (selection.length && confirm(`'${selection}' をNGワードに追加します`)) {
    addNGWord(selection)
  }
})

aborn()
