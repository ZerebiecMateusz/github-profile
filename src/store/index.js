import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../components/App'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
