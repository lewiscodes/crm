import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import routes from './routes.js'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
  applyMiddleware(promise, thunk)
))

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
