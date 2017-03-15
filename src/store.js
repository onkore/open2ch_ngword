import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import { alias } from 'react-chrome-redux'
import { chromeMessaging } from './middlewares'

const aliases = {
  'aborn-count': () => {
  }
}

const store = createStore(
  require('./reducers').default,
  applyMiddleware(
    createLogger(),
    chromeMessaging,
    alias(aliases)
  )
)

export default store
