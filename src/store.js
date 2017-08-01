import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'

import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))
export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

export default store

