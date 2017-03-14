import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'react-chrome-redux'
import App from '../components/App'

const store = new Store({portName: 'OPEN2CH_NGWORD'})

store.subscribe(() => {
  const state = store.getState()

  if (state.length) {
    chrome.storage.local.set({ state })
  }
})

store.ready().then(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
