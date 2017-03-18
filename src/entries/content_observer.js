import { abornNodeCommand } from '../commands/abornCommand'

const observer = new MutationObserver(mutations => {
  const comments = mutations.map(m => m.addedNodes)

  const targets = []
  comments.filter(c => !!c.length).forEach(c => {
    for (const item of c)
      targets.push(item)
  })

  abornNodeCommand(targets)
})

const thread = document.querySelector('.thread')
observer.observe(thread, {attributes: true, childList: true, characterData: true})
