import ngword from './ngwords'

const createListItem = (word) => {
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('name', word)
  checkbox.setAttribute('value', word)
  checkbox.setAttribute('id', word)

  const label = document.createElement('label')
  label.setAttribute('for', word)
  label.textContent = word

  const listItem = document.createElement('li')
  listItem.className = 'open2ch-ngwords__item'
  listItem.appendChild(checkbox)
  listItem.appendChild(label)

  return listItem;
}

const showNGWords = () => {
  const list = document.querySelector('.open2ch-ngwords')

  list.innerHTML = ''

  ngword.all((ngword) => list.appendChild((createListItem(ngword))))
}

document.querySelector('.open2ch-remove-button').addEventListener('click', () => {
  const checked = document.querySelectorAll('.open2ch-ngwords input[type="checkbox"]:checked')

  checked.forEach((el) => {
    const value = el.getAttribute('value')

    chrome.storage.local.get({NGWords: []}, (store) => {
      const position = store.NGWords.indexOf(value)
      store.NGWords.splice(position, 1)

      chrome.storage.local.set(store)
    })
  })

  showNGWords()
})

showNGWords()
