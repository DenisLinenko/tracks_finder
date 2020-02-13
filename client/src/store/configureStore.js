import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import createRootReducer from '../reducers'


export const history = createBrowserHistory()

export default function configureStore(initialState) {
  const logger = createLogger()

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        logger
      )
    )
  )

  return store
}
