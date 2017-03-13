import ngword from './ngwords'

export const ABORN = 'あぼーん'

export const abornComment = (dl, ngword) => {
  if (dl.textContent.match(ngword)) {
    dl.dataset.aborn = ngword
    dl.style.display = 'none'
  }
}

export const abornPage = () => {
  document.querySelectorAll('.thread > dl').forEach((el) => {
    ngword.all((ngword) => abornComment(el, ngword))
  })
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((el) => {
      ngword.all((ngword) => abornComment(el, ngword))
    })
  })
})

export const startObserver = () => {
  const thread = document.querySelector('.thread')
  observer.observe(thread, {attributes: true, childList: true, characterData: true})
}
