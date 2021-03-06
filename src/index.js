import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import rootReducer from './reducers'

const thunkIsMe = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}

const storeEnhancer = compose(
  applyMiddleware(thunkIsMe),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducer, storeEnhancer)
// store.subscribe(() => {
//   console.log('STORE => ', store.getState())
// })

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    renderApp(NextApp)
  })

  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default
    store.replaceReducer(nextReducer)
  })
}
